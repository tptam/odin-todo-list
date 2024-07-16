import { isAfter, isToday } from "date-fns";

class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #done;
    constructor(title, description, dueDate, priority, done) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
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

    static rules = {
        title: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
            val => val.length < 200
        ],
        description: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
        ],
        dueDate: [
            val => val !== null,
            val => val !== undefined,
            val => Date.prototype.isPrototypeOf(val),
            val => {
                const today = new Date();
                return isAfter(val, today) || isToday(val);
            },
        ],
        priority: [
            val => val !== null,
            val => val !== undefined,
            val => typeof(val) === "number",
            val => [3,2,1,0].includes(val),
        ],
        done: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === "boolean",
        ],
    }
}

export default Todo;