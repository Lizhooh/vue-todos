<template>
    <div class="main-contanier">
        <header class="title">Todos</header>
        <Box :todos="todos"/>
    </div>
</template>

<script>
    import './css/style.less';
    import Box from '../Box/box';
    import Todos from './Todos.js';
    window.todos = Todos;

    export default {
        name: 'Main',

        data() {
            return {
                todos: Todos.data
            };
        },

        components: {
            Box,
        }
    }
</script>

