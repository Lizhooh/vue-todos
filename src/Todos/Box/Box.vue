
<template>
    <div class="box-contanier">
        <header>
            <div class="toggle-all"></div>
            <input type="text" class="add-todo" placeholder="todo ?" maxlength="100">
        </header>
        <section>

        </section>
        <footer>

        </footer>
    </div>
</template>

<script>
    import './css/style.less';

    export default {
        name: 'Box',
        props: {
            todos: Array,
        },
    };

</script>
