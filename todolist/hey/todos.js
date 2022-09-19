const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const alldel = document.querySelector("#alldel");

const todos = () => {
  todoForm.addEventListener("submit", handleSubmit);
}

const paintTodos = (newTodo) => {
  //const checkbox = document.querySelector("input[name=checkbox]");
  //이러한 방법도 있다.
  const li = document.createElement("li");
  const chkBox = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  chkBox.type = "checkbox";
  chkBox.id = "chking"
  li.appendChild(chkBox);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  button.innerText = "X";
  button.addEventListener("click", deleteTodos);
  chkBox.addEventListener("change", function cheking(e) {
    if(e.target.checked){
      span.style.textDecoration = 'line-through';
    }
  });
  todoList.appendChild(li);
  alldel.addEventListener("click", function allDeleteTodos() {
    li.remove();
  });
  li.addEventListener("dblclick", function modi() {
    const modify = prompt('수정하실 내용을 입력하세요.', newTodo);
    newTodo = modify;
    span.innerText = modify;
  });
};

/*
const checking = (e) => {
  if(e.target.checked){
    console.log("체체킹");
    
    //text-decoration:line-through
  }
};
*/

const handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodos(newTodo);
};

const deleteTodos = (event) => {
  const removingOne = event.target.parentElement;
  removingOne.remove();
};

todos();