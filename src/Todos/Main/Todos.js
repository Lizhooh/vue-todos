import uuid from 'uuid';

let flag = false;
let TodoList = [];

const types = {
    id: String,
    text: String,
    time: String,
    completed: Boolean,
};

const D = {
    set(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    },
    get(key) {
        return JSON.parse(
            localStorage.getItem(key)
        );
    },
};

!flag && (TodoList = D.get('todos') || []) && (flag = true);

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

        D.set('todos', TodoList);
    };

    static removeTodo = (id) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                TodoList.splice(i, 1);

                D.set('todos', TodoList);
                return;
            }
        }
    };

    static completedTodo = (id) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                TodoList[i].completed = !TodoList[i].completed;

                D.set('todos', TodoList);
                return;
            }
        }
    };

    static editTodo = (id, text) => {
        for (let i in TodoList) {
            if (TodoList[i].id === id) {
                TodoList[i].text = text;

                D.set('todos', TodoList);
                return;
            }
        }
    };

    static clearTodos = () => {
        TodoList.splice(0, TodoList.length + 1);

        D.set('todos', TodoList);
    };
}