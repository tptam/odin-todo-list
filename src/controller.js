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
            clickMultiDeleteButton: this.multipleDelete,
            clickAddButton: () => {},
            clickTitleLink: () => {},
            clickProjectLink: () => {},
            clickStatusButton: () => {},
        }
        this.#view.todos.render(content, JSON.stringify(tableObj), todoHandlers);
    }

    multipleDelete(){
        const checkedBoxes = document.querySelector("input:checked");
        checkedBoxes.forEach(
            box => model.deleteProjectById(box.value)
        );
    }
}

export default Controller;