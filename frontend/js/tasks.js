const tbody = document.querySelector("#tbody-content");
const addForm = document.querySelector(".form-tasks");
const input_form = document.querySelector("#input-task");

//Requests
const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};

const addTask = async (event) => {
  event.preventDefault();

  const taskBody = { title: input_form.value };

  await fetch("http://localhost:3333/tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
    body: JSON.stringify(taskBody),
  });

  input_form.value = "";
  loadTasks();
};

const editTask = async (task) => {
  const { id, title, status } = task;

  const body = {
    id: id,
    title: title,
    status: status,
  };

  await fetch(`http://localhost:3333/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
    body: JSON.stringify(body),
  });
  loadTasks();
};

const deleteTask = async (id) => {
  await fetch(`http://localhost:3333/tasks/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
  });

  loadTasks();
};

//Functions
const formatDate = (dateUTC) => {
  const date = new Date(dateUTC).toLocaleString("pt-br", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return date;
};

const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
};

const createSelect = (value) => {
  const options = `
    <option value="Pendente">Pendente</option>
    <option value="Em andamento">Em andamento</option>
    <option value="Concluido">Concluído</option>
    `;
  const select = createElement("select", "", options);

  select.value = value;

  return select;
};

const createRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  //Title
  const tdTitle = createElement("td", title);
  const titleForm = createElement("form");
  const titleInput = createElement("input");

  const tdCreatedAt = createElement("td", formatDate(created_at));
  const tdStatus = createElement("td");

  //Create select
  const selectStatus = createSelect(status);
  selectStatus.addEventListener("change", () => {
    task.status = selectStatus.value;
    editTask(task);
  });

  //td actions button
  const tdActions = createElement("td");

  //Button Edit
  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> edit </span>'
  );
  editButton.classList.add("btn-action");

  editButton.addEventListener("click", () => {
    //Form edit task
    titleInput.value = title;
    titleInput.classList.add("edit-input");
    titleForm.appendChild(titleInput);
    titleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newTitle = document.querySelector(".edit-input");
      editTask({ id, title: newTitle.value, status });
    });

    tdTitle.innerText = "";
    tdTitle.appendChild(titleForm);
  });

  //Button Delete
  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> delete </span>'
  );
  deleteButton.classList.add("btn-action");
  deleteButton.addEventListener("click", () => {
    deleteTask(id);
  });

  //Insertions
  tbody.appendChild(tr);
  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);

  //Insertions action button
  tr.appendChild(tdActions);

  //Insert edit button
  tdActions.appendChild(editButton);

  //Insert delete button
  tdActions.appendChild(deleteButton);

  //Insert select status
  tdStatus.appendChild(selectStatus);

  return tr;
};

const loadTasks = async () => {
  const { task } = await fetchTasks();

  tbody.innerHTML = "";

  for (tasks of task) {
    createRow(tasks);
  }
};

addForm.addEventListener("submit", addTask);
loadTasks();
