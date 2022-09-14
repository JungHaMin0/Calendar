const todolist = () => {

    const input = document.querySelector(".in");
    const submit = document.querySelector(".sub");
    const rel = document.querySelector(".rel");
    const dsds = document.querySelector(".dsds");

    submit.onclick = () => {
        const li = document.createElement('li');
        const del = document.createElement('button')
        if(input.value == '') {
            alert('내용 입력해 주세요.');
        } else {
            dsds.appendChild(del);
            dsds.appendChild(li);
            li.innerHTML = input.value;
            del.innerHTML = '삭제';
            del.addEventListener("click", delTodo);
            rel.appendChildd(dsds);
        }
        input.value = '';
        input.focus();
        
        li.onclick = () => {
            li.style.textDecoration = "line-through";
        }
        const delTodo = (event) => {
            const removing = event.target.parentElement;
            removing.remove();
        }
    };


};
$(document).ready(todolist);