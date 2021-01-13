export default{
    actions:{},
    mutations:{
        addTodo(state, newTodo){
             state.todos.push(newTodo);
        },
        deleteTodo(state, index){
            state.todos.splice(index, 1);
        },
        deleteAllTodos(state){
            state.todos = [];
        },
        deleteDoneTodos(state){
            state.todos = state.todos.filter(todo => !todo.done);
        },
        editTodo(state, index){
            state.todos[index].edit = !state.todos[index].edit;
        },
        toggleTodo(state, index){
            state.todos[index].done = !state.todos[index].done;
        },
        saveFilter(state, filter){
            state.todosFilter = filter;
        }
    },
    state:{
        todos:[],
        todosFilter:"Все задачи",
    },
    getters:{
        filteredTasks(state){
            switch (state.todosFilter) {
                case 'Все задачи' :
                    return state.todos;
                case 'Завершенные' :
                    return state.todos.filter(todo => todo.done);
                case 'Не завершенные' :
                    return state.todos.filter(todo => !todo.done);
                default :
                    return state.todos;
            }
        }
    }
}
