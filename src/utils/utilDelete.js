import localStorage from '../index.js';

export default function utilDelete(btn) {
  const ul = document.getElementById('list');
  const deletedTask = document.querySelector('.editing');
  const index = btn.parentNode.querySelector('.checks').id - 1;
  const arrTasks = localStorage();
  ul.removeChild(deletedTask);
  arrTasks.splice(index, 1);
  return arrTasks;
}
