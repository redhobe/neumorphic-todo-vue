<template>
        <div class="addTodoWrapper">
            <input class="addTaskLine inputArea" @keyup.enter="submit" v-model="todoText"
                   placeholder="Введите задачу"
                   autofocus autocomplete="off">
            <button class="addButton" @click="submit">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        props: ["todos"],
        data() {
            return {
                todoText: null,
            }
        },
        methods: {
            ...mapMutations(["addTodo"]),
            submit(){
                if (!this.todoText) {
                    return alert("Введите задачу");
                }
                this.addTodo({
                    text: this.todoText,
                    done: false,
                    edit: false,
                });
                this.todoText = null;
            },
        },
    }
</script>

