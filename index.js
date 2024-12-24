function addTask(){
    const taskInput=document.getElementById("new-task");
    const tasklist=document.getElementById("task-list");

    const taskText=taskInput.value.trim();

    const listItem=document.createElement("li");

    const taskSpan=document.createElement("span");
    taskSpan.textContent=taskText;

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.style.marginLeft="20px";

    deleteButton.addEventListener("click",() =>{
        tasklist.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    tasklist.appendChild(listItem);

    taskInput.value="";
}