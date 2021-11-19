let todoList = {
  modal: document.getElementById("openTaskModal"),
  body: document.getElementById("todo"),
  taskNameContainer: document.getElementById("taskNameContainer"),
  taskResponsibleContainer: document.getElementById("taskResponsibleContainer"),
  taskDescriptionContainer: document.getElementById("taskDescriptionContainer"),
  tasks: [
    {
      name: "Test1",
      responsible: "User1",
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
  document.getElementById("saveTask").addEventListener("click", validateForm);
}

function validateForm() {
  let x = document.getElementById("taskNameInput").value;
  let y = document.getElementById("taskResponsibleInput").value;
  if (x == "" || y == "") {
    return false;
  }else{
    console.log("dkjl");
    addTaskToTodoList();
    closeModal();
    return true;
  }
}

function addEnterKeyFunction(e) {
  if (e.which == 13) {
    addTaskToTodoList();
  }
}

function writeTodoList() {
  let htmlOutput = "";
  for (let i = 0; i < todoList.tasks.length; i++) {
    htmlOutput +=
      "<div class='task' id='task" +
      i +
      "'> <button class='edit' ></button><li>" +
      todoList.tasks[i].name +
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
  todoList.tasks.push({
    name: document.getElementById("taskNameInput").value,
    responsible: document.getElementById("taskResponsibleInput").value,
    description: document.getElementById("taskDescriptionInput").value,
  });
  console.log("finished")
  writeTodoList();

  document.getElementById("taskToAdd").value = "";
}

function editTask(indexTask) {
  showModal(true, indexTask);
  writeTodoList();
}
function deleteTask(indexTask) {
  todoList.tasks.splice(indexTask, 1);
  writeTodoList();
}

// When the user clicks on the button, open the modal
function showModal(editing, taskNumber) {
  let modalFooter = document.getElementsByClassName("modalFooter")[0];

  if (!editing) {
    modalFooter.style.display = "none";
    fillTaskInputOrContainer(true, taskNumber);
    setModalInputsVisible(false);
  } else {
    modalFooter.style.display = "default";
    setModalInputsVisible(true);
    
    if (taskNumber != null) {
      fillTaskInputOrContainer(false, taskNumber);
    }
  }

  todoList.modal.style.display = "block";
}

function closeModal() {
  todoList.modal.style.display = "none";
  clearModalInputs();
}

function setModalInputsVisible(trueOrFalse){
  let modalInputs = document.getElementsByClassName("modalInput")
  for (let index = 0; index < modalInputs.length; index++) {
    if (trueOrFalse){
      modalInputs[index].style.display = "default"
    }else{
      modalInputs[index].style.display = "none"
    }
  }
}

function clearModalInputs(){
  let modalInputs = document.getElementsByClassName("modalInput")
  for (let index = 0; index < modalInputs.length; index++) {
      modalInputs[index].value = ""
  }
}

function fillTaskInputOrContainer(isContainer, taskNumber) {
  switch (isContainer) {
    case true:
      document.getElementById("taskNameContainer").innerHTML =
        todoList.tasks[taskNumber].name;
      document.getElementById("taskResponsibleContainer").innerHTML =
        todoList.tasks[taskNumber].responsible;
      document.getElementById("taskDescriptionContainer").innerHTML =
        todoList.tasks[taskNumber].description;
      break;
    default:
      document.getElementById("taskNameInput").value =
        todoList.tasks[taskNumber].name;
      document.getElementById("taskResponsibleInput").value =
        todoList.tasks[taskNumber].responsible;
      document.getElementById("taskDescriptionInput").value =
        todoList.tasks[taskNumber].description;
  }
}

addButtonFunctions();
writeTodoList();
