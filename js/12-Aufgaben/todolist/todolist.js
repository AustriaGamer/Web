let todoList ={
  body:document.getElementById("todo"),
  tasks : [
    {
      name:"Test1",
      responcebility:"User1",
      description:"aklfdölkjgfdkjlfdkfdkjfdkk"
    }
  ]
} 

document.getElementById("addTask").addEventListener("click", addTaskToTodoList);
document.getElementById("taskToAdd").addEventListener("keypress", test);
function test(e){
    if (e.which == 13) {
      addTaskToTodoList();
    }
}

function openTaskWindow(){
  document.write("<div id='taskWindow'></div>")
}

function writeTodoList() {
  let htmlOutput = "";
  for (let i = 0; i < todoList.tasks.length; i++) {
    htmlOutput +=
      "<div class='task' id='task" +
      i +
      "'> <button class='edit' ></button><li>" +
      todoList.tasks[i] +
      "</li><button class='delete' ></button></div>";
  }
  todoList.body.innerHTML = htmlOutput;
  addButtonFunctionWithClassName("edit");
  addButtonFunctionWithClassName("delete");
}

function addButtonFunctionWithClassName(buttonClassName) {
  let but = document.getElementsByClassName(buttonClassName);
  for (let i = 0; i < but.length; i++) {
    but[i].onclick = function (event) {
      switch (buttonClassName) {
        case "edit":
          editTask(i);
          break;
        case "delete":
          deleteTask(i);
      }
    };
  }
}

function addTaskToTodoList() {
  let task = document.getElementById("taskToAdd").value;
  if (task != "" && task != " ") {
    todoList.tasks.push(task);
    writeTodoList();
  }
  document.getElementById("taskToAdd").value = "";
}

function editTask(i) {
  todoList.tasks[i] = prompt("Please enter new Title");
  writeTodoList();
}
function deleteTask(i) {
  todoList.tasks.splice(i, 1); 
  writeTodoList();
}





// Get the modal
var modal = document.getElementById("openTaskModal");

// Get the button that opens the modal
var btn = document.getElementById("addTask");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var taskNames = document.getElementsByClassName("taskNameContainer");
  taskNames[0].value = todoList.tasks[0].name;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}