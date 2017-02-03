<template>
    <div class="list-contanier" :class="{'list-contanier-hide': hide}">
        <ul>
            <li
                v-for="(todo, i) in todos"
                class="item"
                @click.stop="completed($event, todo.id)"
                >
                <div class="item-toggle" :class="{'completed': todo.completed}"></div>
                <div
                    class="item-content"
                    :class="{'completed': todo.completed}"
                    :key="todo.id"
                    :contenteditable="todoEdit"
                    >
                    {{ todo.text }}
                </div>
                <div class="item-time">
                    {{ todo.time | date }}
                </div>
                <button class="remove" @click.stop="remove($event, todo.id)">
                    ×
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import './css/style.less';
    import Todos from '../Main/Todos.js';

    export default {
        name: 'List',
        props: {
            todos: Array,
            hide: Boolean,
            todoEdit: false,
        },
        filters: {
            date(value) {
                return new Date(parseInt(value)).toString();
            },
        },
        methods: {
            remove(event, id) {
                if(id.length === 0) return;
                Todos.removeTodo(id);
            },
            completed(event, id) {
                if(id.length === 0) return;
                Todos.completedTodo(id);
            },
            edit(event, id) {
                if(id.length === 0) return;
                this.todoEdit = true;
            },
            leaveEdit(event) {
                this.todoEdit = false;
            },
        },
    };
</script>