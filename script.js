let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click",addlist);

function addlist(){

    if(inputBox.value === ''){
        alert("please enter a value");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        setStorage();
    }
    inputBox.value='';
};

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        setStorage();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        setStorage();
    }
}, false)


function setStorage(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function getStorage(){
    listContainer.innerHTML = localStorage.getItem('data');
}
getStorage();