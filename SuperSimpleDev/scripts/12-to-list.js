const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

// renderTodoList();
const renderToDoList = () =>{
let todoListHTML = ''

todoList.forEach((todoObject,index) => {
    const {name, dueDate} = todoObject
    // const dueDate = todoObject.dueDate
    const html = `
    <div>${name}</div><div>${dueDate}</div>
    <button class="delete-button js-delete-todo-button">Delete</button>
    `
    ;
    todoListHTML += html;
})


document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
         todoList.splice(index, 1);
        renderToDoList()
    })
})

console.log(index)

}

document.querySelector('.js-add-todo-button')
.addEventListener('click' ,() => {
    addToDo()
})



const addToDo = () => {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value 

    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value
    
    todoList.push({
        name: name,
        dueDate, dueDate
    })

    inputElement.value = ''

    renderToDoList()


}

renderToDoList()