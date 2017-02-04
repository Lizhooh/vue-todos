
<template>
    <div class="box-contanier">
        <header>
            <div
                class="toggle-all"
                @click="listToggleAll"
                :class="{'active': listHide}"
                />
            <input
                type="text"
                class="add-todo"
                placeholder="todo?"
                maxlength="300"
                @keydown.enter="submit"
                >
        </header>
        <section>
            <List :todos="todos" :hide="listHide"/>
        </section>
        <footer>
            <span class="todo-all-count">任务事项: {{ todos.length }}</span>
            <span class="todo-active-count">活动事项: {{ todoActive.length }}</span>
            <span class="todo-completed-count">完成事项: {{ todoCompleted.length }}</span>

            <button class="todo-claer-completed" @click="clearCompleted">
                {{ todoCompleted.length > 0 && '清空完成事项' || ''}}
            </button>
        </footer>
    </div>
</template>

<script>
    import './css/style.less';
    import List from '../List/list';
    import Todos from '../Main/Todos.js';

    export default {
        name: 'Box',
        components: { List },
        props: {
            todos: Array,

        },
        data() {
            return {
                listHide: false,
            };
        },
        computed: {
            todoActive() {
                return this.todos.filter(todo => todo.completed === false);
            },
            todoCompleted() {
                 return this.todos.filter(todo => todo.completed === true);
            },
        },
        methods: {
            submit(event) {
                const text = event.target.value.trim();
                if (text.length === 0) return;
                Todos.addTodo(text);
                event.target.value = '';
            },
            listToggleAll(event) {
                this.listHide = !this.listHide;
            },
            clearCompleted(event) {
                Todos.clearCompleted();
            },
        }
    };

</script>
