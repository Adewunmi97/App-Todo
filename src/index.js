import './style.css';

class TodoList {
  constructor() {
    this.todos = [
      {
        index: 0,
        description: 'Get Groceries',
        completed: true,
      },
      {
        index: 1,
        description: 'Study for exams',
        completed: false,
      },
    ];
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

      container.appendChild(li);
    });
  }
}

const todoList = new TodoList();
todoList.displayList();