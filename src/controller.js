import { format, isToday, isBefore } from "date-fns";

class Controller{
    #view;
    #model;

    #reload;

    static #priorityLabels = ["eliminate", "delegate", "schedule", "do"];

    constructor(view, model) {
        this.#view = view;
        this.#model = model;
    }

    init(){
        // For testing
        // this.#model.populateDummy();
        this.#model.init();
     
        const menu = document.querySelector("nav");
        const menuHandlers = {
            clickAllTodosLink: this.displayAllTodos.bind(this),
            clickTodayTodosLink: this.displayTodayTodos.bind(this),
            clickProjectLink: this.displayTodosInProject.bind(this),
            clickAllProjectsLink: this.displayAllProjects.bind(this),
            clickAddLink: (() => {
                this.displayAllProjects();
                this.displayProjectAddModal();
            }).bind(this),
        }

        const projectsData = [];
        this.#model.getAllProjects().forEach(
            project => projectsData.push(
                {
                    id: project.id,
                    name: project.name
                } 
            )
        );

        this.#view.menu.render(menu, JSON.stringify(projectsData), menuHandlers);

        this.displayAllTodos();
    }

    displayProjectAddModal(){
        const content = document.querySelector("#content");
        const formData = {
            // now empty, but can be added new property
            // e.g., todo tasks without projects
        }
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: ((name) => this.submitProjectAddForm(name)).bind(this),
        }

        this.#view.projectAdd.render(
            content,
            JSON.stringify(formData),
            handlers
        )
        // This method opens a modal window, so #reload is not updated
    }

    displayProjectEditModal(projectId) {
        const content = document.querySelector("#content");
        const project = this.#model.getProjectById(projectId);

        const formData = {
            project: {
                id: projectId,
                name: project.name
            }
        }

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: (
                (projectId, name) => this.submitProjectEditForm(projectId, name)
            ).bind(this),
        }

        this.#view.projectEdit.render(content, JSON.stringify(formData), handlers);
    }


    displayProjectModal(projectId){
        const content = document.querySelector("#content");
        const project = this.#model.getProjectById(projectId);

        const formData = {
            project: {
                id: projectId,
                name: project.name
            }
        }

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickEditButton: (projectId => {
                this.displayProjectEditModal(projectId)
            }).bind(this),
        }

        this.#view.project.render(content, JSON.stringify(formData), handlers);
    }

    displayTodoAddModal(){
        const content = document.querySelector("#content");
        const formData = {
            projects: []
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: this.submitTodoAddForm.bind(this),
        }
        this.#view.todoAdd.render(
            content,
            JSON.stringify(formData),
            handlers
        );

        // This method opens a modal window, so #reload is not updated
    }

    displayTodoModal(todoId) {
        const content = document.querySelector("#content");
        const todo = this.#model.getTodoById(todoId);
        const project = this.#model.getProjectByTodoId(todoId);

        const formData = {
            projects: [],
            todo: {
                id: todo.id,
                title: todo.title,
                dueDate: todo.dueDate === null
                    ? ""
                    : format(todo.dueDate, "yyyy-MM-dd"),
                priority: Controller.#priorityLabels[todo.priority],
                description: todo.description,
                done: todo.done,
                projectName: project === null ? "" : project.name,
                projectId: project === null ? "" : project.id
            }
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickEditButton: (todoId => {
                this.displayTodoEditModal(todoId)
            }).bind(this),
        }

        this.#view.todo.render(
            content,
            JSON.stringify(formData),
            handlers
        )

        // This method opens a modal window, so #reload is not updated
    }


    displayTodoEditModal(todoId){
        const content = document.querySelector("#content");
        const todo = this.#model.getTodoById(todoId);
        const project = this.#model.getProjectByTodoId(todoId);

        const formData = {
            projects: [],
            todo: {
                id: todo.id,
                title: todo.title,
                dueDate: todo.dueDate === null 
                    ? "" 
                    : format(todo.dueDate, "yyyy-MM-dd"),
                priority: Controller.#priorityLabels[todo.priority],
                description: todo.description,
                done: todo.done,
                projectName: project === null? "" : project.name, 
                projectId: project === null ? "" : project.id
            }
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: this.submitTodoEditForm.bind(this),
        }

        this.#view.todoEdit.render(
            content,
            JSON.stringify(formData),
            handlers
        )

        // This method opens a modal window, so #reload is not updated
    }

    displayAllProjects() {
        const tableData = {
            caption: "All Projects",
            rows: []
        }

        this.#model.getAllProjects().forEach(
            project => {
                const overdueTodos = this.#model.getOverdueTodosInProject(project.id);
                const progressRate = this.#model.getProjectProgressRate(project.id);
                tableData.rows.push(
                    {
                        id: project.id,
                        name: project.name,
                        todos: project.todos.length,
                        notDone: project.todos.filter(todo => !todo.done).length,
                        overdue: overdueTodos.length,
                        progress: `${Math.round(progressRate * 100) }%`,
                        progressRate: progressRate,
                    }
                )
            }
        )

        const tableHandlers = {
            clickNameLink: (
                projectID => this.displayProjectModal(projectID)
            ).bind(this),
            clickTodosLink: this.displayTodosInProject.bind(this),
            clickMultiDeleteButton: (
                projectIds => this.deleteSelectedProjects(projectIds)
            ).bind(this),
            clickNotDoneLink: this.displayNotDoneTodosInProject.bind(this),
            clickOverdueLink: this.displayOverdueTodosInProject.bind(this),
            clickAddButton: this.displayProjectAddModal.bind(this),
        }

        const content = document.querySelector("#content");
        
        this.#view.projects.render(
            content, 
            JSON.stringify(tableData), 
            tableHandlers
        );

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "project");

        this.#reload = this.displayAllProjects;
    }

    deleteSelectedProjects(projectIds) {
        for (let id of projectIds) {
            this.#model.deleteProjectById(id);
        }
        this.#reload();
    }

    displayTodosWithoutProject(){
        const todos = this.#model.getTodosWithoutProject();
        this.displayTodos(
            "ToDo tasks without project",
            todos,
            "Every task belongs to a project. Great job staying organized!"
        )
    }

    displayTodosInProject(projectId){
        if (projectId === "") {
            this.displayTodosWithoutProject();
            return;
        }
        const project = this.#model.getProjectById(projectId);
        this.displayTodos(`Project: ${project.name}`, project.todos)

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "project");
        this.#reload = () => this.displayTodosInProject(projectId)
    }


    displayOverdueTodosInProject(projectId) {
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Overdue Tasks`,
            todo => isBefore(todo.dueDate, new Date()) && !todo.done,
            projectId,
            "No Overdue Tasks. Great Job!",
        )
        this.#reload = () => this.displayOverdueTodosInProject(projectId);
    }

    displayNotDoneTodosInProject(projectId) {
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Unfinished Tasks`,
            todo => !todo.done,
            projectId,
            "No unfinished tasks. Yay!"
        )
        this.#reload = () => this.displayNotDoneTodosInProject(projectId);
    }

    displayDoneTodosInProject(projectId){
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Finished Tasks`,
            todo => todo.done,
            projectId
        )
        this.#reload = () => this.displayDoneTodosInProject(projectId);
    }

    displayTodayTodos(){
        const todos = this.#model.searchTodos(
            todo => isToday(todo.dueDate)
        );
        this.displayTodos("Today's ToDo", todos, "No tasks found. What a beautiful day.");

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "today");

        this.#reload = this.displayTodayTodos;
    }

    displaySearchedTodos(caption, filter, projectId=null, emptyMessage="") {
        let todos = this.#model.searchTodos(filter);
        if (projectId !== null) {
            todos = todos.filter(
                todo => {
                    const proj = this.#model.getProjectByTodoId(todo.id);
                    return proj.id === projectId;
                }
            );
        }
        this.displayTodos(caption, todos, emptyMessage);
        this.#reload = () => this.displaySearchedTodos(
            caption, 
            filter, 
            projectId,
            emptyMessage
        );
    }

    displayTodos(caption, todos, emptyMessage=""){
        const content = document.querySelector("#content");
        content.textContent = "";

        const tableData = {
            caption: caption,
            rows: [],
            emptyMessage: emptyMessage,
        };

        todos.map(
            todo => {
                const proj = this.#model.getProjectByTodoId(todo.id);
                const dueDateString = todo.dueDate === null 
                    ? ""
                    : format(new Date(todo.dueDate), "yyyy-MM-dd")
                tableData.rows.push(
                    {
                        id: todo.id,
                        title: todo.title,
                        dueDate: dueDateString,
                        priority: Controller.#priorityLabels[todo.priority],
                        done: todo.done,
                        project: proj === null ? "" : proj.name,
                        projectId: proj === null ? "" : proj.id,
                    }
                );
            }
        );

        const todosHandlers = {
            clickMultiDeleteButton: (
                todoIds => this.deleteSelectedTodos(todoIds)
            ).bind(this),
            clickAddButton: this.displayTodoAddModal.bind(this),
            clickTitleLink: this.displayTodoModal.bind(this),
            clickProjectLink: (
                (projectId) => this.displayTodosInProject(projectId)
            ).bind(this),
            clickStatusButton: ((todoId) => {
                // this.toggleTodoStatus(button, id);
                this.changeTodoStatus(todoId);
                this.#reload();
            }).bind(this),

        }

        this.#view.todos.render(content, JSON.stringify(tableData), todosHandlers);
    }

    displayAllTodos(){
        const content = document.querySelector("#content");
        content.textContent = "";

        const todos = this.#model.getAllTodos();
        this.displayTodos("All ToDo Tasks", todos);

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "all");

        this.#reload = this.displayAllTodos;
    }

    deleteSelectedTodos(todoIds){
        for (let id of todoIds) {
            this.#model.deleteTodoById(id);
        }
        this.#reload();
    }

    // For button status component
    toggleTodoStatus(button, todoId){
        this.#model.toggleTodoDoneByID(todoId);
        this.#view.statusButton.toggle(button);
    }

    // For checkbox status component
    changeTodoStatus(todoId) {
        this.#model.toggleTodoDoneByID(todoId);
    }

    submitProjectEditForm(projectId, name) {
        // Data Validation
        // (Should usually pass thanks to HTML form validation)
        if (name.length > 50) {
            alert("The project name is too long. Keep it under 50 characters.");
            return;
        }

        // Update project / Validation against schema
        try {
            this.#model.updateProjectById(projectId, name);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: project not updated.");
                return;
            }
        }
        this.#reload();
    }

    submitProjectAddForm(name){
        if (name.length > 50) {
            alert("The project name is too long. Keep it under 50 characters.");
            return;
        }

        // Create new Todo / Validation against schema
        let project;
        try {
            project = this.#model.createProject(name);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: no project was created.");
                return;
            }
        }

        this.#reload();
    }

    submitTodoEditForm(id, title, dueDateString, 
        priorityLabel, description, projectId, doneString
    ){
        const priority = Controller.#priorityLabels.indexOf(priorityLabel);
        const dueDate = dueDateString === "" ? null : new Date(dueDateString);
        const done = JSON.parse(doneString);

        // Data Validation
        // (Should usually pass thanks to HTML form validation)

        // New task's dueDate should be today or later
        // (This is not in schema because tasks can be overdue)
        if (dueDate !== null && isBefore(dueDate, new Date())) {
            alert("The due date must be today or later.");
            return;
        }

        if (title.length > 50) {
            alert("The task title is too long. Keep it under 50 characters.");
            return;
        }

        // Update Todo / Validation against schema
        try {
            this.#model.updateTodoByID(id, title, description, dueDate, priority, done);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: task not updated.");
                return;
            }
        }

        const project = this.#model.getProjectByTodoId(id);

        // Update project
        if (project !== null) {
            this.#model.deleteTodoFromCurrentProject(id);
        }
        if (projectId !== "") {
            this.#model.addTodoToProject(id, projectId);
        }
    

        this.#reload();
    }

    submitTodoAddForm(title, dueDateString, priorityLabel, description, projectId){
        const priority = Controller.#priorityLabels.indexOf(priorityLabel);
        const dueDate = dueDateString === "" ? null : new Date(dueDateString);

        // Data Validation
        // (Should usually pass thanks to HTML form validation)

        // New task's dueDate should be today or later
        // (This is not in schema because tasks can be overdue)
        if (dueDate !== null && isBefore(dueDate, new Date())) {
            alert("The due date must be today or later.");
            return;
        }

        if (title.length > 50) {
            alert("The task title is too long. Keep it under 50 characters.");
            return;
        }

        // Create new Todo / Validation against schema
        let todo;
        try {
            todo = this.#model.createTodo(title, description, dueDate, priority, false);
        } catch(err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: no task was created.");
                return;
            }
        }

        // Add to project
        if (projectId !== "") {
            this.#model.addTodoToProject(todo.id, projectId);
        }

        this.#reload();
    }
}

export default Controller;