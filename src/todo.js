import { isAfter, isToday } from "date-fns";
import DataRuleSet from "./data-rule-set.js";

class Todo {
    #id;
    #title;
    #description;
    #dueDate;
    #priority;
    #done;
    constructor(id, title, description, dueDate, priority, done) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
    }
    get id() {
        // id is immutable and has no setter
        return this.#id;
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

    setAll(title, description, dueDate, priority, done){
        // id is immutable and has no setter
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
    }

    static #dataRuleSet = new DataRuleSet({
        id: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
        ],
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
    });

    static get dataRuleSet(){
        return Todo.#dataRuleSet;
    }
}

export default Todo;