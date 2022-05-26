const todoList = new Vue({
    el : "#app",
    data : {
        newTodo : "",
        todos : [
            {
                text : "Portare a spasso il cane",
                done : "true"
            },
            {
                text : "Raccogliere le foglie",
                done : "false"
            },
            {
                text : "Pulire casa",
                done : "false"
            },
            {
                text : "Preparare il pranzo",
                done : "true"
            },
            {
                text : "Comprare i biglietti per il circo",
                done : "false"
            }
        ]
    },
    methods : {
        addItem() {
            const task = {
                text : this.newTodo,
                done : false
            }
            if(this.newTodo !== "") {
                this.todos.push(task);
                this.newTodo = ""
            }
        },
        deleteItem(index) {
            this.todos.splice(index,1);
        }
    }
})

