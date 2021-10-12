/**
 * @jest-environment jsdom
 */
import utilDeleteCompleted from '../utils/utilDeleteCompleted.js';

jest.mock('../index');
class Task {
  constructor(ind = 0, des = '', com = false) {
    this.index = ind;
    this.description = des;
    this.completed = com;
  }
}

const task1 = new Task(1, 'task1');
const task2 = new Task(2, 'task2');

describe('Clear Completed', () => {
  test('Happy Path Clear Delete LocalStorage', () => {
    expect(utilDeleteCompleted()).toEqual([task1, task2]);
  });
  test('Happy Path Clear Delete DOM', () => {
    document.body.innerHTML = `<ul id="list">
      <li class="editing">
        <div class  = "d-flex-between">
        <input type="checkbox" class="checks" id="3" value="3">
        <input type="text" value="task3" class="edit-task" disabled>
        </div> 
        <button class="delete-button task-buttons d-none">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>`;
    const check = document.querySelector('.checks');
    check.checked = true;
    utilDeleteCompleted();
    const ul = document.querySelector('#list');
    expect(ul.childElementCount).toBe(0);
  });
});