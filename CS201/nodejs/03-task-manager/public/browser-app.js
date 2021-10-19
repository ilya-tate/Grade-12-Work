// DOM Elements
const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.getElementsByClassName.visibility = "visible";
  try {
    const {
      data: { tasks }
    } = await axios.get("/api/v1/tasks");
    if (tasks.length < 1) {
      tasksDOM.innerHTML = `<h5 class="empty-list">No tasks in list</h5>`;
      loadingDOM.style.visibility = "hidden";
      return;
    }

    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskId, name } = task;
        return `<div class="single-task ${
          completed && "task-complete"
        }"><h5><span><i class="far fa-check-circle"></i></span></h5><div class="task-links><!--Edit Link--><a href="task.html?id=${taskId}" class="edit-link"><i class="fas fa-edit"></i></a><!--Delete Button--><button type="button" class="delete-btn" data-id="${taskId}"<i class="fas fa-trash"></i></button></div></div>.`;
      })
      .join("");
    tasksDOM.innerHTML = allTasks;
  } catch (err) {
    tasksDOM.innerHTML = `<h5 class="empty-list">Error, try again</h5>`;
  }
  loadingDOM.style.visibility = "hidden";
};

showTasks();

// Delete task /api/v1/tasks/:id
tasksDOM.addEventListener("click", async (e) => {
  const target = e.target;
  if (target.parentElement.classList.contains("delete-btn")) {
    loadingDOM.style.visibility = "visible";
    const id = target.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
    } catch (err) {
      console.error(err);
    }
  }
  loadingDOM.style.visibility = "hidden";
});

// Form
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = taskInputDOM.Value;
  try {
    await axios.post("/api/v1/tasks", { name });
    showTasks();
    taskInputDOM.value = "";
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = "Success, task added";
    formAlertDOM.classList.add("text-success");
  } catch (err) {
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML - "Error, try again";
  }
  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 3000);
});
