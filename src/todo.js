class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #done;
    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = false;
    }
    get title(){
        return this.#title;
    }
    set title(newTitle){
        this.#title = newTitle;
    }
    get description() {
        return this.#description;
    }
    set description(newDescription) {
        this.#description = newDescription;
    }
    get dueDate() {
        return this.#dueDate;
    } 
    set dueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }
    get priority() {
        return this.#priority;
    }
    set priority(newPriority) {
        this.#priority = newPriority;
    } 
    get done() {
        return this.#done;
    }
    set done(newDone) {
        this.#done = newDone;
    }
}

export default Todo;