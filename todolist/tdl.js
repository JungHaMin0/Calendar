const todolist = () => {

    const input = document.querySelector(".in");
    const submit = document.querySelector(".sub");
    const rel = document.querySelector(".rel");

    submit.onclick = () => {
        if(input.value == '') {
            alert('내용 입력해 주세요.');
        } else {
            const li = document.createElement('li');
            li.innerHTML = input.value;
            rel.appendChild(li);
        }
    };
};
$(document).ready(todolist);