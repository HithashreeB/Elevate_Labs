document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  // Add new task
  addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      addTodoItem(input.value.trim());
      input.value = '';
      input.focus();
    }
  });

  // Add task with Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  // Add item function
  function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // Toggle complete
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      todoList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
  }
});
