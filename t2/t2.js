// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here


//We add todo items there
const listElement = document.querySelector('ul');


todoList.forEach(todo => {
  const li = document.createElement('li'); // creates li element

//create a checkbox?
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = `todo-${todo.id}`;
checkbox.checked = todo.completed;

//create label

const label = document.createElement('label');
label.htmlFor = checkbox.id;
label.textContent = todo.task;

//Append the checkbox and label for to the <li>
li.appendChild(checkbox);
li.appendChild(label);
listElement.appendChild(li);

})
