function saveObj(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObj(key) {
    return JSON.parse(localStorage.getItem(key));
}

function clear() {
    localStorage.clear();
}

function isSaved(key){
    return localStorage.hasOwnProperty(key);
}

export {saveObj, getObj, clear, isSaved}