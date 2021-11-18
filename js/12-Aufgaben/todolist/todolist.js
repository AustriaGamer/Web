let todoList = document.getElementById("todo");
let todoListTasks = [];
document.getElementById("addTask").addEventListener("click", addToTodoList);
document.getElementById("taskToAdd").addEventListener("keypress", test);
function test(e){
    if (e.which == 13) {
      addToTodoList();
    }
}

function writeTodoList() {
  let html = "";
  for (let i = 0; i < todoListTasks.length; i++) {
    html +=
      "<div class='task' id='task" +
      i +
      "'> <button class='edit' ></button><li>" +
      todoListTasks[i] +
      "</li><button class='delete' ></button></div>";
  }
  todoList.innerHTML = html;
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

function addToTodoList() {
  let task = document.getElementById("taskToAdd").value;
  if (task != "" && task != " ") {
    todoListTasks.push(task);
    writeTodoList();
  }
  document.getElementById("taskToAdd").value = "";
}

function editTask(i) {
  todoListTasks[i] = prompt("Please enter new Title");
  writeTodoList();
}
function deleteTask(i) {
  todoListTasks.splice(i, 1); 
  writeTodoList();
}
