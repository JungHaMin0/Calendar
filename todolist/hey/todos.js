const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const alldel = document.querySelector("#alldel");

const todos = () => {
  todoForm.addEventListener("submit", handleSubmit);
}

const paintTodos = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  button.innerText = "X";
  button.addEventListener("click", deleteTodos);
  todoList.appendChild(li);
  alldel.addEventListener("click", function allDeleteTodos() {
    li.remove();
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodos(newTodo);
};

const deleteTodos = (event) => {
  const removingOne = event.target.parentElement;
  removingOne.remove();
}

todos();