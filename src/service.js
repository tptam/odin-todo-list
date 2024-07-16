import { ulid } from 'ulid'

class Service {
    #todos = {};
    #projects = {};

    constructor(){
        const defaultProject = new Project("default");
        const id = Service.#getId();
        this.#projects[id] = defaultProject;
    }

    static #getId() {
        return ulid();
    }
}