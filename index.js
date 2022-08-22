const addNodes = () => {
    const target = document.getElementsByClassName("play")[0];
    const table = document.createElement("table");
    let idx = 1;

    let now = new Date();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    const lastDay = new Date(year, month, 0).getDate();
    console.log(lastDay);

    

    for(let i=0; i<6; i++){
        const tr = document.createElement("tr");
        for(let j=0; j<5; j++){
            const td = document.createElement("td");
            td.innerHTML = idx++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
    
};
$(document).ready(addNodes);

const day = () => {
    const target = document.getElementById("label");
    const p = document.createElement("p");
    let now = new Date();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    const pText1 = document.createTextNode(year + "년 ");
    const pText2 = document.createTextNode(month + "월");
    p.append(pText1, pText2);
    target.appendChild(p);

    const lastDay = new Date(year, month, 0).getDate();
    console.log(lastDay);
};  
$(document).ready(day);