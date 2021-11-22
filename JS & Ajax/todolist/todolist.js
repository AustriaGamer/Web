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

function addButtonFunctionByClassName() {
  let but = document.getElementsByClassName("task");
  for (let i = 0; i < but.length; i++) {
    let taskElements = but[i].children;
    taskElements[0].onclick = function () {
      editTask(i);
    };
    taskElements[1].onclick = function () {
      showModal(false, i);
    };
    taskElements[2].onclick = function () {
      deleteTask(i);
    };
  }
}

function validateForm() {
  let x = document.getElementById("taskNameInput").value;
  let y = document.getElementById("taskResponsibleInput").value;
  let z = document.getElementById("taskDescriptionInput").value;
  if (x == "" || y == "" || x.length >20 || y.length > 20) {
    return false;
  }else if(!z == "" && z.length > 800){
    return false;
    
  }

    addTaskToTodoList();
    closeModal();
    return true;
  
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
      "'> <button class='edit' ></button><div class='todoListTaskName actionTodoListField'>" +
      todoList.tasks[i].name +
      "</div><button class='delete' ></button></div>";
  }
  todoList.body.innerHTML = htmlOutput;
  addButtonFunctionByClassName();
}

function addTaskToTodoList() {
  todoList.tasks.push({
    name: document.getElementById("taskNameInput").value,
    responsible: document.getElementById("taskResponsibleInput").value,
    description: document.getElementById("taskDescriptionInput").value,
  });
  console.log("finished");
  writeTodoList();
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
    console.log("why");
    modalFooter.style.display = "flex";
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

function setModalInputsVisible(trueOrFalse) {
  let modalInputs = document.getElementsByClassName("modalInput");
  let modalOutputs = document.getElementsByClassName("modalOutput");
  for (let index = 0; index < modalInputs.length; index++) {
    if (trueOrFalse) {
      modalInputs[index].style.display = "flex";
      modalOutputs[index].style.display = "none";
    } else {
      modalInputs[index].style.display = "none";
      modalOutputs[index].style.display = "flex";
    }
  }
}

function clearModalInputs() {
  let modalInputs = document.getElementsByClassName("modalInput");
  for (let index = 0; index < modalInputs.length; index++) {
    modalInputs[index].value = "";
  }
}

function fillTaskInputOrContainer(isContainer, taskNumber) {
  switch (isContainer) {
    case true:
      document.getElementById("taskNameOutput").innerHTML =
        todoList.tasks[taskNumber].name;
      document.getElementById("taskResponsibleOutput").innerHTML =
        todoList.tasks[taskNumber].responsible;
      document.getElementById("taskDescriptionOutput").innerHTML =
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
