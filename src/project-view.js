class ProjectView {
    #project;
    constructor(project) {
        this.#project = project;
    }

    toString(){
        let string = `Project Name: ${this.#project.name}\n`;
        string += "Todos:\n";
        this.#project.todos.forEach(
            todo => string += `${todo.title} (${todo.dueDate.toDateString()}) ${todo.done ? "✓" : "-"}\n`
        );
        return string;
    }
}

export default ProjectView;