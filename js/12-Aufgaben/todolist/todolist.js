let todoList = {
  modal: document.getElementById("openTaskModal"),
  body: document.getElementById("todo"),
  taskNameContainer: document.getElementsByClassName("taskNameContainer")[0],
  taskResponcibleContainer: document.getElementsByClassName(
    "taskResponcibleContainer"
  )[0],
  taskDescriptionContainer: document.getElementsByClassName(
    "taskDescriptionContainer"
  )[0],
  tasks: [
    {
      name: "Test1",
      responceble: "User1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare risus sem, non elementum purus imperdiet et. Ut dictum leo vel dignissim molestie. Maecenas nec pulvinar est. Nam tempor tristique scelerisque. Morbi posuere tincidunt sapien, tincidunt ullamcorper neque elementum et. Donec aliquam molestie nisl, elementum mattis magna pharetra a. Morbi vehicula risus in ligula vehicula imperdiet. Vivamus rutrum ipsum ac tincidunt rhoncus. Duis at tristique ligula. Integer orci lectus, rhoncus vitae augue nec, ultrices mollis odio. Quisque tempor ex augue, id sollicitudin est elementum eget. Nulla tempor ex lorem, nec feugiat ipsum aliquet at Aenean in lacus sit amet nunc commodo finibus ac at libero. Vivamus eu metus ut felis euismod pretium. Proin mattis scelerisque rhoncus. Vestibulum venenatis, eros vel consequat suscipit, lectus nisl hendrerit tortor, accumsan pulvinar felis ante a velit. Duis sit amet eros diam. Vestibulum ligula ex, efficitur ut volutpat a, tincidunt ut metus. Mauris tincidunt justo mollis lobortis posuere. In condimentum mi tellus, vitae sollicitudin nibh auctor a. Nulla in metus ipsum. Ut eu sapien lectus. Proin porta efficitur nisl, eu congue felis. Quisque ut pretium tortor. Proin sed congue mi. Morbi et urna posuere, mollis dui ut, semper magna. Ut lacus erat, tincidunt non risus ut, lacinia gravida mauris",
    },
  ],
};

function addButtonFunctions() {
  document.getElementById("addTask").addEventListener("click", function () {
    showModal(true);
  });
  document
    .getElementById("taskToAdd")
    .addEventListener("keypress", addEnterKeyFunction);

  //Modal
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", closeModal);
  window.onclick = function (event) {
    if (event.target == todoList.modal) {
      todoList.modal.style.display = "none";
    }
  };
  document.getElementById("cancelTask").addEventListener("click", closeModal);
  document.getElementById("saveTask").addEventListener("click", function () {
    addTaskToTodoList();
    closeModal();
  });
}

function addEnterKeyFunction(e) {
  if (e.which == 13) {
    addTaskToTodoList();
  }
}

function openTaskWindow() {
  document.write("<div id='taskWindow'></div>");
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

// When the user clicks on the button, open the modal
function showModal(editing, taskNumber) {
  let modalFooter = document.getElementsByClassName("modalFooter")[0];
  let task = todoList.tasks[taskNumber];

  if (!editing) {
    modalFooter.style.display = "none";
    todoList.taskNameContainer.innerHTML = task.name;
    todoList.taskResponcibleContainer.innerHTML = task.responceble;
    todoList.taskDescriptionContainer.innerHTML = task.description;
  } else {
    modalFooter.style.display = "default";
    todoList.taskNameContainer.innerHTML = "<input class='modalInput'></input>";
    todoList.taskResponcibleContainer.innerHTML =
      "<input class='modalInput'></input>";
    todoList.taskDescriptionContainer.innerHTML =
      "<textarea class='modalTextArea' rows='15' maxlength='800' placeholder='Enter Text Here! (max. 800 Characters)'></textarea>";
  }

  todoList.modal.style.display = "block";
}

function closeModal() {
  todoList.modal.style.display = "none";
}

addButtonFunctions();
