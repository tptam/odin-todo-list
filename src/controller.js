import { format } from "date-fns";

class Controller{
    #view;
    #model;
    static #priorityLabel = ["eliminate", "delegate", "schedule", "do"];

    constructor(view, model) {
        this.#view = view;
        this.#model = model;
    }

    init(){
        this.#model.populateDummy();
     
        const menu = document.querySelector("nav");
        const menuHandlers = {
            clickAllTodosLink: () => { },
            clickTodayTodosLink: () => { },
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

        const content = document.querySelector("#content"); 

        const tableObj = {
            caption: "All ToDo's", 
            rows: []
        };
        this.#model.getAllTodos().map(
            todo => tableObj.rows.push(
                {
                    id: todo.id,
                    title: todo.title,
                    dueDate: format(new Date(todo.dueDate), "yyyy-MM-dd"),
                    priority: Controller.#priorityLabel[todo.priority],
                    done: todo.done,
                    project: "Alice"
                }
            )
        );

        const todoHandlers = {
            clickMultiDeleteButton: this.deleteSelectedTodos.bind(this),
            clickAddButton: () => {},
            clickTitleLink: () => {},
            clickProjectLink: () => {},
            clickStatusButton: this.toggleTodoStatus.bind(this),
        }
        this.#view.todos.render(content, JSON.stringify(tableObj), todoHandlers);
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