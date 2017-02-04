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
        TodoList.unshift({
            id: uuid.v4(),
            text: text,
            time: Date.now(),
            completed: false,
        });

        D.set('todos', TodoList);
    };

    static removeTodo = (id) => {
        TodoList.map((todo, i) => (
            todo.id === id && TodoList.splice(i, 1)
        ));

        D.set('todos', TodoList);
    };

    static clearCompleted = () => {
        let temp = [];

        TodoList.forEach(todo => (
            !todo.completed && temp.push(todo))
        );

        Todos.clearTodos();
        temp.forEach(todo => TodoList.push(todo));

        D.set('todos', TodoList);
    };

    static completedTodo = (id) => {
        TodoList.map(todo => (
            todo.id === id && (todo.completed = !todo.completed)
        ));

        D.set('todos', TodoList);
    };

    static editTodo = (id, text) => {
        TodoList.map(todo => (
            todo.id === id && (TodoList[i].text = text)
        ));

        D.set('todos', TodoList);
    };

    static clearTodos = () => {
        TodoList.splice(0, TodoList.length);

        D.set('todos', TodoList);
    };
}