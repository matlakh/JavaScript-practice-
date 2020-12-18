function onPageLoaded() {
    const saveButton = document.querySelector(".save");
    const clearButton = document.querySelector(".clear");
    const showTipsButton = document.querySelector(".showTips");
    const closeTipsButton = document.querySelector(".closeTips");
    const overlay = document.querySelector(".overlay");
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector(".toDoList");

    saveButton.addEventListener("click", () => {
        localStorage.setItem("toDoList", ul.innerHTML);
    });
    clearButton.addEventListener("click", () => {
        ul.innerHTML = "";
        localStorage.removeItem('toDoList', ul.innerHTML);
    });
    showTipsButton.addEventListener("click", () => {
        overlay.style.height = "100%";
    });
    closeTipsButton.addEventListener("click", () => {
        overlay.style.height = "0";
    });

    function createToDoList() {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.classList.add("toDoList-text");
        const newToDoList = input.value;
        textSpan.append(newToDoList);

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("toDoList-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteBtn.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";
        DeleteList(deleteBtn);
    }
    function onClickToDoList(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }
    ul.addEventListener("click", onClickToDoList);

    function loadToDoList() {
        const data = localStorage.getItem("toDoList");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("span .toDoList-trash");
        for (const button of deleteButtons) {
            DeleteList(button);
        }
    }

    function DeleteList(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createToDoList();
        }
    });
    ul.addEventListener("click", onClickToDoList); 

    loadToDoList();
};
document.addEventListener("DOMContentLoaded", onPageLoaded);