<template>
        <ul class="todosList">
            <h4 style="color:grey;">Всего: {{this.$store.state.todos.todos.length}}</h4>
            <li v-for="(todo,index) in filteredTasks" :key="index" :class="[{completed: todo.done},'animate']">

                <input type="checkbox" class="toggle" @click ="toggleTodo(index)">
                <label class="roundButton animate">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </label>

                <textarea ref="textarea" :class="[ {inputArea:todo.edit}, 'animate']" autofocus v-model="todo.text"
                          :readonly="!todo.edit" @input="textareaResize(index)"></textarea>

                <button class="editButton roundButton  animate" @click="edit(index)">
                    <i v-if="!todo.edit" class="fa fa-pencil" aria-hidden="true"></i>
                    <i v-else class="fa fa-floppy-o" aria-hidden="true"></i>
                </button>

                <button class="deleteButton roundButton animate" @click="del(index)">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
            </li>
        </ul>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex';
    export default {
        mounted() {
            if (this.$refs.textarea) {
                this.$refs.textarea.forEach(area => {
                    area.style.height = area.scrollHeight + 'px';
                });
            }
        },
        methods: {
            ...mapMutations(["deleteTodo","editTodo","toggleTodo"]),

            textareaResize(index) {
                let textarea = this.$refs.textarea[index];
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
                console.log('f')
            },

            del(index) {
                this.deleteTodo(index);
                this.$refs.textarea[index].style.height = 'auto';
            },

            edit(index) {
                this.editTodo(index);
                this.textareaResize(index);
            },
        },
        computed: {
            ...mapGetters(["filteredTasks"]),
        },

    }
</script>
