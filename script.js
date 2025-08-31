const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

// Allow pressing Enter key to add task
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Plz enter a task");
    return;
  }

  // Create list item
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  // Buttons
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-btns");

  let doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "doneBtn";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  // Add functionality
  doneBtn.onclick = function() {
    li.classList.toggle("done");
  };

  deleteBtn.onclick = function() {
    li.remove();
  };

  btnContainer.appendChild(doneBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
