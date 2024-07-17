import Todo from "./todo.js";

class TodoView {
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

    toSummaryString(){
        return `${this.todo.title} (${this.todo.dueDate.toDateString()}) ${this.todo.done ? "✓" : "-"}\n`;
    }
}



export default TodoView;