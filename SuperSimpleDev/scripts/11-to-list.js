const todoList = []



const renderToDoList = () =>{
let todoListHTML = ''
for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]
    const html = `
    <p>${todo}
    <button onclick="
        todoList.splice(${i}, 1);
        renderToDoList()
    ">Delete</button>
    </p>`
    ;
    todoListHTML += html;
}
console.log(todoListHTML)

document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
}

const addToDo = () => {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value 
    
    todoList.push(name)
    console.log(todoList)

    inputElement.value = ''

    renderToDoList()


}

renderToDoList()