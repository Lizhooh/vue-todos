
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
                maxlength="100"
                @keydown.enter="submit"
                >
        </header>
        <section>
            <List :todos="todos" :hide="listHide"/>
        </section>
        <footer>
            <span class="todo-count">todo: {{ todos.length }}</span>
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
        }
    };

</script>
