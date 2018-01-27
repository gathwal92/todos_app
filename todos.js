var todoList = {

    todos: [],

    display: function() {
        if (this.todos.length === 0) {
            console.log("Todos list is empty!")
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("(x) ", this.todos[i].todoText);
                } else {
                    console.log("( ) ", this.todos[i].todoText);
                }
            };
        }
    },

    add: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        todoList.display();
    },

    update: function(arrayPosition, updatedText) {
        this.todos[arrayPosition].todoText = updatedText;
        todoList.display();
    },

    delete: function(arrayPosition) {
        this.todos.splice(arrayPosition, 1);
        todoList.display();
    },

    completed: function(arrayPosition) {
        var todo = this.todos[arrayPosition];
        todo.completed = !todo.completed; 
        todoList.display();
    },

    toggleAll: function() {
        var totalTodos = this.todos.length; 
        var completedTodos = 0;

        for (i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            };
        };

        if (completedTodos === totalTodos) {
            for(i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false; 
            }
            todoList.display();
        } else {
            for(i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
            todoList.display();
        };

    },


};