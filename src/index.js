document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener('submit', listTask)
});

function listTask(event){
  event.preventDefault()
  let task = event.target.newTaskDescription.value
  addList(task)
}

function addList(task) {
  let listItem = document.createElement('li')
  listItem.textContent = task
  listItem.id = counter
  // let deleteItem = document.createElement('form')
  // deleteItem.onsubmit = deleteListItem(listItem.id);
  // deleteItem.id = 'deleteForm'
  // deleteItem.addEventListener('submit', (event) => {
  //   console.log(event)
  // })
  let deleteButton = document.createElement('button')
  // deleteButton.type = 'submit'
  deleteButton.innerText = 'delete'
  // deleteItem.appendChild(deleteButton)
  deleteButton.addEventListener('click', (event) => {
    console.log(event.target.parentElement)
    event.target.parentElement.remove()
  })
  listItem.appendChild(deleteButton)
  document.querySelector('#tasks').appendChild(listItem)
  counter += 1
}

let counter = 0

// function deleteListItem(id) {
//   listItem = document.querySelector('#id')
//   console.log(listItem.value)
//   document.querySelector('#tasks').removeChild(listItem)
// }
