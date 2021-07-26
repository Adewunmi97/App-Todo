import { handleDragStart, handleDrop, cancelDefault } from './services/sort';
import { updateStatus, getTodos } from './services/update';
import './style.css';

class TodoList {
  constructor() {
    this.todos = getTodos();
  }

 handleCompletedStatus = (e) => {
   updateStatus(e, this.todos);
 }

 handleDropEvt = (e) => {
   handleDrop(e, this.todos);
 }

 displayList() {
   const container = document.querySelector('.todoList');
   this.todos.forEach((todo, index) => {
     const li = document.createElement('li');
     li.innerHTML = `
                  <div class="task-item">
                    <div class="task-info">
                        <div class="check-container">
                        <input id=todo-${index} type="checkbox" ${todo.completed ? 'checked' : ''}>
                        <label for="todo-${index}" class="checkmark"></span>
                        </div>
                        <div>${todo.description}</div>
                    </div>
                    <i class="fas fa-ellipsis-v"></i>
                  </div>
                `;
     li.draggable = true;
     li.dataset.index = index;
     li.addEventListener('dragstart', handleDragStart);
     li.addEventListener('drop', this.handleDropEvt);
     li.addEventListener('dragenter', cancelDefault);
     li.addEventListener('dragover', cancelDefault);
     container.appendChild(li);
     document.querySelectorAll('input[type="checkbox"]').forEach((check) => {
       check.addEventListener('change', this.handleCompletedStatus, false);
     });
   });
 }
}

const todoList = new TodoList();
todoList.displayList();