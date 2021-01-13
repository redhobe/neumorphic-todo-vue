<template>
    <div id="app">
        <AddTodo/>
        <FilterAndButtons/>
        <TodoList/>
    </div>

</template>

<script>
    import TodoList from "./components/TodoList";
    import AddTodo from "./components/AddTodo";
    import FilterAndButtons from "./components/FilterAndButtons";

    export default {
        name: 'App',
        metaInfo: {
            title: 'Neumorphic-todo',
            titleTemplate: '%s - Vue',
            htmlAttrs: {
                lang: 'en',
                amp: undefined
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }
            ],
        },
        components: {
            TodoList,
            AddTodo,
            FilterAndButtons,
        },
    }
</script>
