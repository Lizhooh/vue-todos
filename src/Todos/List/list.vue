<template>
    <div class="list-contanier" :class="{'list-contanier-hide': hide}">
        <ul>
            <li
                v-for="(todo, i) in todos"
                :key="todo.id"
                class="item"
                >

                <div
                    class="item-toggle"
                    :class="{'completed': todo.completed}"
                    @click.stop="completed($event, todo.id)"
                    />

                <div
                    class="item-content"
                    :class="{'completed': todo.completed}"
                    >
                    {{ todo.text }}
                </div>

                <div class="item-time">
                    {{ todo.time | date }}
                </div>

                <button class="remove" @click.stop="remove($event, todo.id)">×</button>
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
        },
        filters: {
            date(value) {
                const d = new Date(parseInt(value));
                const FT = (t) => t < 10 ? '0' + t : t;

                let _Y = d.getFullYear(),
                    _M = FT(d.getMonth() + 1),
                    _D = FT(d.getDate()),
                    _h = FT(d.getHours()),
                    _m = FT(d.getMinutes()),
                    _s = FT(d.getSeconds())
                    ;

                return `${_Y}-${_M}-${_D} ${_h}:${_m}:${_s}`;
            },
        },
        methods: {
            remove(event, id) {
                if (id.length === 0) return;
                Todos.removeTodo(id);
            },
            completed(event, id) {
                if (id.length === 0) return;
                Todos.completedTodo(id);
            },
            edit(event, id) {
                if (id.length === 0) return;
                this.todoEdit = true;
            },
            leaveEdit(event) {
                this.todoEdit = false;
            },
        },
    };
</script>