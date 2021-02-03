let todos = [];

const todoService = {

    save: (todo) => {
        todos.push({
            id: todos.length+1,
            todo: todo
        });
        console.log("Todo mentve!")
    },

    getTodos: () => todos,

    delete: (id) => {
        todos = todos.filter((todo) => {if(todo.id !== id){return todo}})
        console.log(todos);
    }
}

module.exports = todoService;