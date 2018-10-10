let nTask = document.getElementById("newTask")
let todoList = document.getElementById("todo")
let addButton = document.getElementById("addButton")
let completeList = document.getElementById('completed')

addButton.addEventListener('click',function(){

    let liItem = document.createElement('li')
    
    checkBox = document.createElement("input")
    checkBox.setAttribute("type","checkbox")
    liItem.appendChild(checkBox)

    
    
    let addTask = nTask.value
    let t = document.createElement('p')
    t.innerHTML = addTask
    liItem.appendChild(t)
    
    
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    liItem.appendChild(removeButton)
    todoList.appendChild(liItem)
    
    
    checkBox.addEventListener('change',function(){
        if(this.checked){
            completeList.appendChild(liItem)
        }
        else{
            todoList.appendChild(liItem)
        }
    })
    
    removeButton.addEventListener('click',function(){
        
        let liToDelete = this.parentElement
        let taskList = liToDelete.parentElement

        if(liToDelete.id == "todoList") {
            todoList.removeChild(liItem)
        } 
        else {
            completeList.removeChild(liItem)
        }
    })
})
  