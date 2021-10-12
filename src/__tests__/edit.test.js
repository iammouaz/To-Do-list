/**
 * @jest-environment jsdom
 */
import utilEdit from '../utils/utilEdit.js';

jest.mock('../index');

class Task {
  constructor(ind = 0, des = '', com = false) {
    this.index = ind;
    this.description = des;
    this.completed = com;
  }
}

const task1 = new Task(1, 'task1');
const task2 = new Task(2, 'taskEdit');
const task3 = new Task(3, 'task3', true);

describe('Edit a task', () => {
  test('Happy Path Return Array', () => {
    document.body.innerHTML = `<ul id="list">
      <li class="editing">
        <div class  = "d-flex-between">
        <input type="checkbox" class="checks" id="2" value="2">
        <input type="text" value="taskEdit" class="edit-task" disabled>
        </div> 
        <button class="delete-button task-buttons d-none">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>`;

    const editingTask = document.querySelector('.editing');
    const inputTask = editingTask.querySelector('.edit-task');

    expect(utilEdit(inputTask, editingTask)).toEqual([task1, task2, task3]);
  });

  test('Happy Path DOM manipulation', () => {
    document.body.innerHTML = `<ul id="list">
      <li class="editing">
        <div class  = "d-flex-between">
        <input type="checkbox" class="checks" id="2" value="2">
        <input type="text" value="task2" class="edit-task" disabled>
        </div> 
        <button class="delete-button task-buttons d-none">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>`;

    const editingTask = document.querySelector('.editing');
    const inputTask = editingTask.querySelector('.edit-task');
    inputTask.value = 'taskEdit';
    utilEdit(inputTask, editingTask);
    expect(inputTask.value).toBe(task2.description);
  });
});