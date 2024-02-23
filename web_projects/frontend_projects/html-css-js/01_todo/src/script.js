const addTodoForm = document.querySelector("#addForm");

addTodoForm.addEventListener("submit", (ev) => {


    const addTodoInput = document.getElementById("addTodoInput").value;
    const viewBtn = document.querySelector("#viewBtn");
    const parentUlOfTodos = document.querySelector("#parentUlOfListTodo");

    const elementLi = document.createElement("li");
    elementLi.innerHTML = addTodoInput;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";

    viewBtn.addEventListener("click", () => {
        parentUlOfTodos.style.display = "flex";
    });


    function deleteLi(parent, child) {
        parent.removeChild(child)
    };

    delBtn.addEventListener("click", () => {
        deleteLi(parentUlOfTodos, elementLi)
    });

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    editButton.addEventListener("click", () => {
        let changedInput = prompt("text to replace");
        elementLi.innerHTML = changedInput;
        elementLi.appendChild(delBtn);
        elementLi.appendChild(editButton)
    })

    elementLi.appendChild(delBtn)
    elementLi.appendChild(editButton)
    parentUlOfTodos.appendChild(elementLi);
    ev.preventDefault()
});