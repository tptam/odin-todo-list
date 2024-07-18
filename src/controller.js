import { format, isToday } from "date-fns";

class Controller{
    #view;
    #model;
    static #priorityLabel = ["eliminate", "delegate", "schedule", "do"];

    constructor(view, model) {
        this.#view = view;
        this.#model = model;
    }

    init(){
        // For testing
        this.#model.populateDummy();
     
        const menu = document.querySelector("nav");
        const menuHandlers = {
            clickAllTodosLink: this.displayAllTodos.bind(this),
            clickTodayTodosLink: this.displayTodayTodos.bind(this),
            clickProjectLink: () => { },
            clickAllProjectsLink: () => { },
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

    displayTodayTodos(){
        const todos = this.#model.searchTodos(
            todo => isToday(todo.dueDate)
        );
        this.displayTodos("Today's ToDo", todos);
    }

    displayTodos(caption, todos){
        const content = document.querySelector("#content");
        content.textContent = "";

        const tableData = {
            caption: caption,
            rows: []
        };

        todos.map(
            todo => {
                const proj = this.#model.getProjectByTodoId(todo.id);
                tableData.rows.push(
                    {
                        id: todo.id,
                        title: todo.title,
                        dueDate: format(new Date(todo.dueDate), "yyyy-MM-dd"),
                        priority: Controller.#priorityLabel[todo.priority],
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
            clickProjectLink: () => { },
            clickStatusButton: this.toggleTodoStatus.bind(this),

        }

        this.#view.todos.render(content, JSON.stringify(tableData), todosHandlers);
    }

    displayAllTodos(){
        const content = document.querySelector("#content");
        content.textContent = "";

        const tableData = {
            caption: "All ToDo Tasks",
            rows: []
        };
        this.#model.getAllTodos().map(
            todo => {
                const proj = this.#model.getProjectByTodoId(todo.id);
                tableData.rows.push(
                    {
                        id: todo.id,
                        title: todo.title,
                        dueDate: format(new Date(todo.dueDate), "yyyy-MM-dd"),
                        priority: Controller.#priorityLabel[todo.priority],
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
            clickProjectLink: () => { },
            clickStatusButton: this.toggleTodoStatus.bind(this),
        
        }
        this.#view.todos.render(content, JSON.stringify(tableData), todosHandlers);
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
    }
}

export default Controller;