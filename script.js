const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);
window.onload = loadTasks;

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function handleTaskClick(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
  saveTasks();
}

function createTaskElement(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  li.appendChild(delBtn);

  return li;
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}
