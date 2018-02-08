var todoList = {

    todos: [],

    add: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    update: function(arrayPosition, updatedText) {
        this.todos[arrayPosition].todoText = updatedText;
    },

    delete: function(arrayPosition) {
        this.todos.splice(arrayPosition, 1);
    },

    completed: function(arrayPosition) {
        var todo = this.todos[arrayPosition];
        todo.completed = !todo.completed; 
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
        } else {
            for(i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        };

    },


};


var handlers = {    
    toggleAll: () => {
        todoList.toggleAll();
        view.displayTodos();
    },

    addTodo: () => {
       var addTodoText = document.getElementById('addTodoText'); 
       todoList.add(addTodoText.value);
       addTodoText.value = '';
       view.displayTodos();
    },

    updateTodo: () => {
        var updateTodoPosition = document.getElementById('updateTodoPosition');
        var updateTodoText = document.getElementById('updateTodoText');
        todoList.update(updateTodoPosition.valueAsNumber, updateTodoText.value);
        updateTodoPosition = '';
        updateTodoText = '';
        view.displayTodos();
    },

    deleteTodo: () => {
        var deleteTodoPositon = document.getElementById('deleteTodoPositon');
        todoList.delete(deleteTodoPositon.valueAsNumber);
        deleteTodoPositon = '';
        view.displayTodos();
    },

    completedTodo: () => {
        var completedTodoPosition = document.getElementById('completedTodoPosition');
        todoList.completed(completedTodoPosition.valueAsNumber);
        completedTodoPosition = '';
        view.displayTodos();
    }
};

var view = { 
    displayTodos: () => {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (i = 0; i < todoList.todos.length; i++){
            var todosLi = document.createElement('li')
            var todo = todoList.todos[i]
            var completed = "( )"

            if (todo.completed === true) {
                completed = "(x) " + todo.todoText;
            } else {
                completed = "( ) " + todo.todoText;
            }

            todosLi.textContent = completed;
            todosUl.appendChild(todosLi);
        }
    }


};
