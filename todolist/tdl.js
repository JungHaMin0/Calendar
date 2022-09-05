const todolist = () => {

    const input = document.querySelector(".in");
    const submit = document.querySelector(".sub");
    const rel = document.querySelector(".rel");

    submit.onclick = () => {
        const li = document.createElement('li');
        if(input.value == '') {
            alert('내용 입력해 주세요.');
        } else {
            li.innerHTML = input.value;
            rel.appendChild(li);
        }
        li.onclick = () => {
            li.style.textDecoration = "line-through";
        }
    };

};
$(document).ready(todolist);