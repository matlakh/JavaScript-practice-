document.addEventListener('DOMContentLoaded', function (event) {
    const clearButton = document.querySelector(".clear");
    const showTipsButton = document.querySelector(".showTips");
    const closeTipsButton = document.querySelector(".closeTips");
    const overlay = document.querySelector(".overlay");
    const input = document.querySelector("input[type='text']");
    const listWrapper = document.querySelector(".toDoList");
    let text = document.querySelectorAll(".toDoList-text");

    let toDoArray;

    function newTask (task) {
      this.task = task;
      this.status = false;
    } 

    if (localStorage.taskList) {
      toDoArray = JSON.parse(localStorage.getItem('taskList'));
    } else {
      toDoArray = [];
    }
    //кнопка "Очистить"
    clearButton.addEventListener("click", () => {
      listWrapper.innerHTML = "";
        localStorage.removeItem('taskList', listWrapper.innerHTML);
    });
    //кнопка "Справка"
    showTipsButton.addEventListener("click", () => {
        overlay.style.height = "100%";
    });
    closeTipsButton.addEventListener("click", () => {
        overlay.style.height = "0";
    });

    //добавление задания через ентер
    input.addEventListener("keyup", (keyPressed) => {
      const keyEnter = 13;
      if (keyPressed.which == keyEnter) {
          showToDo();
          addNewElement();
          //очистка инпута
          let inputs = document.querySelectorAll('input[type=text]');
          for (let i = 0;  i < inputs.length; i++) {
          inputs[i].value = '';
          };
      }
    });
    //новый элемент 
    const addNewElement = () => {
      if(input.value.trim()){
        toDoArray.push(new newTask(input.value));
      }else{
        alert("Введите текст!");
      }
      refreshLocaleStorage();
      showToDo();
    }

    const showToDo = () => {
      listWrapper.innerHTML = "";
      toDoArray.forEach((elem, index) => {
        listWrapper.innerHTML += createToDoList(elem, index);
      });

      let deleteElement = document.querySelectorAll(".toDoList-trash");

      deleteElement.forEach(elem => {
        elem.addEventListener("click", deleteElementFromLocalStorage);
      });
      const taskStatus = document.querySelectorAll(".task_status");

      taskStatus.forEach(elem => {
        elem.addEventListener("change",changeStatus);
      })
    };
    function createToDoList(elem, index) {
      return `
      <div class="wrapper ${elem.status ? "checked" : " " }">
          <label><input class="task_status" type="checkbox"  ${elem.status ? "checked" : " " }  data-index="${index}"><span></span></label>
          <h3 class="toDoList-text">${elem.task}</h3>
          <span class="toDoList-trash" data-index="${index}"><i class="fas fa-trash-alt"></i></span>
      </div>
      `;
    }

    
    function changeStatus(){
      toDoArray[this.dataset.index].status =  !toDoArray[this.dataset.index].status;
      refreshLocaleStorage();
      showToDo();
    }
    
    const refreshLocaleStorage = function () {
      localStorage.setItem('taskList', JSON.stringify(toDoArray));
    };
    
    function deleteElementFromLocalStorage(){
      toDoArray.splice(this.dataset.index, 1);
      refreshLocaleStorage();
      showToDo();
    }
    showToDo();
});
