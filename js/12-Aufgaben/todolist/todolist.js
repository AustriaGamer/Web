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
  addButtonFunction("edit");
  addButtonFunction("delete");
}

function addButtonFunction(button) {
  let but = document.getElementsByClassName(button);
  for (let i = 0; i < but.length; i++) {
    but[i].onclick = function (event) {
      switch (button) {
        case "edit":
          edit(i);
          break;
        case "delete":
          deleteTask(i);
      }
    };
  }
}

function addToTodoList() {
  let value = document.getElementById("taskToAdd").value;
  if (value != "" && value != " ") {
    todoListTasks.push(value);
    writeTodoList();
  }
  document.getElementById("taskToAdd").value = "";
}

function edit(i) {
  todoListTasks[i] = prompt("Please enter new Title");
  writeTodoList();
}
function deleteTask(i) {
  todoListTasks.splice(i, 1); 
  writeTodoList();
}
