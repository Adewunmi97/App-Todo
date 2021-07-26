export const saveToStorage = (todos) => {
  const sortedTodos = todos.sort((a, b) => a.index - b.index);
  localStorage.setItem('todos', JSON.stringify(sortedTodos));
};

export const updateStatus = (e, todos) => {
  const index = e.target.id.slice(-1);
  todos[index].completed = !todos[index].completed;
  saveToStorage(todos);
  return todos;
};

const dummyData = [
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
  {
    index: 2,
    description: 'Complete project',
    completed: true,
  },
  {
    index: 3,
    description: 'Cook Dinner',
    completed: false,
  },
];
export const getTodos = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return dummyData;
};
