import Todo from "./todo.js";

class TodoViewModel {
    constructor(todo) {
        this.todo = todo;
     }

    toString() {
        return `
Title: ${this.todo.title}
Description: 
${this.todo.description}
Due Date: ${this.todo.dueDate}
Priority: ${this.todo.priority}
Done: ${this.todo.done}
`.trim();
    }
}

export default TodoViewModel;