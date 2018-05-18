var app = new Vue({
    el: '#app',
    data() {
        return {
            newTodo: '',
            todos: []
        }
    },
    methods: {
        addTodo (){
           if(this.newTodo.length>2){
           this.todos.push({name:this.newTodo, dane:false})
           this.newTodo = ''}
        },
        
        removeTodo(index){
            this.todos.splice(index, 1);
        }
    }
})