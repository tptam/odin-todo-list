import { format, isToday, isBefore } from "date-fns";

class Controller{
    #view;
    #model;

    #reload;

    static #priorityLabels = ["eliminate", "delegate", "schedule", "do"];

    constructor(view, model) {
        this.#view = view;
        this.#model = model;
        this.#model.init();
    }

    init(){
        // For testing
        this.#model.populateDummy();
     
        const menu = document.querySelector("nav");
        const menuHandlers = {
            clickAllTodosLink: this.displayAllTodos.bind(this),
            clickTodayTodosLink: this.displayTodayTodos.bind(this),
            clickProjectLink: this.displayTodosInProject.bind(this),
            clickAllProjectsLink: this.displayAllProjects.bind(this),
            addProject: () => { },
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
            clickAddButton: this.submitTodoAddForm.bind(this),
        }
        this.#view.todoAdd.render(
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
            clickNameLink: ()=>{console.log("name")},
            clickTodosLink: this.displayTodosInProject.bind(this),
            clickNotDoneLink: this.displayNotDoneTodosInProject.bind(this),
            clickOverdueLink: this.displayOverdueTodosInProject.bind(this),
            clickAddButton: () => { console.log("add project") },
        }

        const content = document.querySelector("#content");
        
        this.#view.projects.render(
            content, 
            JSON.stringify(tableData), 
            tableHandlers
        );

        this.#reload = this.displayAllProjects;
    }

    displayTodosInProject(projectId){
        const project = this.#model.getProjectById(projectId);
        this.displayTodos(`Project: ${project.name}`, project.todos)
        this.#reload = () => this.displayTodosInProject(projectId)
    }


    displayOverdueTodosInProject(projectId) {
        console.log(projectId);
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
                tableData.rows.push(
                    {
                        id: todo.id,
                        title: todo.title,
                        dueDate: format(new Date(todo.dueDate), "yyyy-MM-dd"),
                        priority: Controller.#priorityLabels[todo.priority],
                        done: todo.done,
                        project: proj === null ? "" : proj.name,
                        projectId: proj === null ? "" : proj.id,
                    }
                );
            }
        );

        const todosHandlers = {
            clickMultiDeleteButton: this.deleteSelectedTodos.bind(this),
            clickAddButton: () => { },
            clickTitleLink: () => { },
            clickProjectLink: this.displayTodosInProject.bind(this),
            clickStatusButton: this.toggleTodoStatus.bind(this),

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

    deleteSelectedTodos(){
        const checkedBoxes = document.querySelectorAll("input:checked");
        const table = document.querySelector("table.todos");
        if (checkedBoxes.length === 0) {
            return;
        }
        const ids = [];
        checkedBoxes.forEach( box => ids.push(box.value));

        for (let id of ids) {
            this.#model.deleteTodoById(id);
            this.#view.todosTable.deleteRowById(table, id);
        }
    }

    toggleTodoStatus(event){
        const button = event.currentTarget;
        const id = button.closest("tr").getAttribute("data-id");
        this.#model.toggleTodoDoneByID(id);
        this.#view.statusButton.toggle(button);
        this.#reload();
    }

    submitTodoAddForm(title, dueDateString, priorityLabel, description, project){
        const priority = Controller.#priorityLabels.indexOf(priorityLabel);
        const dueDate = dueDateString === "" ? null : new Date(dueDateString);

        // Data Validation
        // (Should usually pass thanks to HTML form validation)

        // New task's dueDate should be today or later
        // (This is not in schema because tasks can be overdue)
        if (dueDate !== null & !isBefore(dueDate, new Date())) {
            alert("The due date must be today or later.");
            return;
        }

        // Create new Todo / Validation against schema
        try {
            this.#model.createTodo(title, description, dueDate, priority, false);
        } catch(err) {
            if (err instanceof this.#model.ValidationError) {
                console.table(err);
                alert(err.message);
                return;
            }
        }

        this.#reload();
    }
}

export default Controller;