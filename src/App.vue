<template>
    <div id="app">
        <Mains />
    </div>
</template>

<script>
    import Mains from './Todos/Main/Main';

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
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 20px 0;
    }

    @media screen (max-width: 430px) {
        #app {
            max-width: 100%;
        }
    }
</style>