<template>
    <div class="taskButtons">
        <div class="filters">
            <label>
                <select @change="saveTodoFilter" v-model="filter">
                    <option>Все задачи</option>
                    <option>Завершенные</option>
                    <option>Не завершенные</option>
                </select>
            </label>
        </div>
        <div>
            <button @click="deleteDoneTodos">Удалить завершенные</button>
            <button @click="deleteAllTodos">Удалить все</button>
        </div>
    </div>
</template>

<script>
        import {mapMutations} from 'vuex';
    export default {
        data(){
            return{
                filter: this.$store.state.todos.todosFilter
            }
        },
        methods: {
            ...mapMutations(["deleteAllTodos", "deleteDoneTodos", "toggleTodo", "saveFilter"]),
            saveTodoFilter(){
                this.saveFilter(this.filter);
            }
        },
    }
</script>

