import { ulid } from "ulid";
import { isBefore } from "date-fns";
import Todo from "./todo.js";
import Project from "./project.js";

import dummyTodos from "./dummy-todos.json";

const todos = {};
const projects = {};
let defaultProject;


function init() {
    defaultProject = createProject("default");
    // Data retrieval from repository will be added 
}


function createTodo(title, description, dueDate, priority, done) {
    const id = getId();
    const input = { id, title, description, dueDate, priority, done };
    const validated = validate(input, Todo.schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key);
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        const todo = new Todo(id, title, description, dueDate, priority, done);
        todos[id] = todo;
        defaultProject.addTodo(todo);
        return todo;
    }
}

function getTodoById(id) {
    return todos[id];
}

function updateTodoByID(id, title, description, dueDate, priority, done) {
    const todo = getTodoById(id);
    const input = { id, title, description, dueDate, priority, done };
    const validated = validate(input, Todo.schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key)
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        todo.setAll(title, description, dueDate, priority, done);
    }
}

function createProject(name) {
    const id = getId();
    const input = { id, name };
    const validated = validate(input, Project.schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key)
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        const project = new Project(id, name);
        projects[id] = project;
        return project;
    }
}

function getProjectById(id) {
    return projects[id];
}

function addTodoToProject(todoId, projectId) {
    const project = getProjectById(projectId);
    const todo = getTodoById(todoId);
    if (project === undefined || todo === undefined) {
        throw new Error("Object not found.");
    }
    project.addTodo(todo);
}

function isDefaultProject(projectId) {
    return getProjectById(projectId) === defaultProject;
}

function deleteTodoFromProject(todoId, projectId) {
    if (isDefaultProject(projectId)) {
        deleteTodo(todoId);
        return;
    }
    const project = getProjectById(projectId);
    const todo = getTodoById(todoId);
    if (project === undefined || todo === undefined) {
        throw new Error("Object not found.");
    }
    project.deleteTodo(todo);
}

function updateProjectById(id, name) {
    const project = getProjectById(id);
    const input = { id, name };
    const validated = validate(input, Project.schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key);
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        project.name = name;
    }
}

function deleteProjectById(projectID) {
    delete (projects[projectID]);
}

function deleteTodoById(todoId) {
    const todo = getTodoById(todoId);
    Object.values(projects).forEach(project => {
        project.deleteTodo(todo);
    });
}

function getAllTodos() {
    return defaultProject.todos;
}

function getAllProjects(excludeDefault = true) {
    if (excludeDefault) {
        return Object.values(projects)
            .filter(
                project => project !== defaultProject
            );
    } else {
        return Object.values(projects);
    }
}

function searchTodos(filterFunc) {
    return getAllTodos().filter(
        todo => filterFunc(todo)
    );
}

function searchProjects(filterFunc, excludeDefault = true) {
    getAllProjects(excludeDefault).filter(
        project => filterFunc(project)
    )
}

function getProjectByTodoId(id, ignoreDefault = true) {
    const todo = getTodoById(id);
    for (let project of Object.values(projects)) {
        if (
            project.todos.includes(todo)
            && (!ignoreDefault || project !== defaultProject)
        ) {
            return project;
        }
    }
    return null;
}

function getOverdueTodosInProject(id) {
    const project = getProjectById(id);
    return project.todos.filter(
        todo => isBefore(todo.dueDate, new Date()) && !todo.done
    );
}

function getProjectProgressRate(id) {
    const project = getProjectById(id);
    const total = project.todos.length;
    if (total === 0) {
        return 0;
    }
    const done = project.todos.filter(todo => todo.done).length;
    return done / total;
}

function toggleTodoDoneByID(id) {
    const todo = getTodoById(id);
    todo.done = !todo.done;
}

function populateDummy() {
    const todos = dummyTodos.map(
        todo => {
            const newTodo = createTodo(
                todo.title,
                todo.description,
                (new Date(todo.dueDate)),
                todo.priority,
                todo.done
            );
            return newTodo;
        }
    );
    const project1 = createProject("Alice");
    const project2 = createProject("Bob");
    const project3 = createProject("Charlie");

    todos.map((todo, index) => {
        if (index < 8) {
            addTodoToProject(todo.id, project1.id);
        } else if (index < 15) {
            addTodoToProject(todo.id, project2.id);
        } else {
            addTodoToProject(todo.id, project3.id);
        }
    });
}


function getId() {
    return ulid();
}

function validate(obj, schema) {
    const validated = {};
    for (const [key, value] of Object.entries(obj)) {
        validated[key] = schema[key](value);
    }
    return validated;


}

function getDefaultProject() {
    return defaultProject;
}

class ValidationError extends Error {
    constructor(keys) {
        super(`Invalid key(s): ${JSON.stringify(keys)}`);
    }
}


export {
    init,
    getDefaultProject,
    createTodo,
    getTodoById,
    updateTodoByID,
    createProject,
    getProjectById,
    addTodoToProject,
    isDefaultProject,
    deleteTodoFromProject,
    updateProjectById,
    deleteProjectById,
    deleteTodoById,
    getAllTodos,
    getAllProjects,
    searchTodos,
    searchProjects,
    getProjectByTodoId,
    getOverdueTodosInProject,
    getProjectProgressRate,
    toggleTodoDoneByID,
    populateDummy,
    ValidationError,
};