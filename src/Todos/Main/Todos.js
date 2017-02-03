import uuid from 'uuid';

let TodoList = [];

var types = {
    id: String,
    text: String,
    time: String,
    completed: Boolean,
};

export default class Todos {

    constructor(name) {
        this.name = name;
    }

    static data = TodoList;

    static addTodo = (text) => {
        TodoList.push({
            id: uuid.v4(),
            text: text,
            time: Date.now(),
            completed: false,
        });
    };

    static removeTodo = (id) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                return void TodoList.splice(i, 1);
            }
        }
    };

    static completedTodo = (id) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                return void (TodoList[i].completed = !TodoList[i].completed);
            }
        }
    };

    static editTodo = (id, text) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                return void (TodoList[i].text = text);
            }
        }
    };

    static clearTodos = () => {
        TodoList = [];
    };
}