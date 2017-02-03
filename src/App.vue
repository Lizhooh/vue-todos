<template>
    <div id="app">
        <Mains />
    </div>
</template>

<script>
    import Mains from './Todos/Main/Main';
    import './Todos/Main/css/normalize.css';

    export default {
        name: 'app',

        data() {
            return {};
        },

        methods: {
        },

        components: {
            Mains,
        }
    };

    let cssmodules = {};
</script>

<style lang="css" scoped>
    #app {
        max-width: 700px;
        margin: 0 auto;
        padding: 20px 0;
    }

    @media screen (max-width: 430px) {
        #app {
            max-width: 100%;
        }
    }
</style>