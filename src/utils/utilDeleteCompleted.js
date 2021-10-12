import localStorage from '../index.js';

export default function utilDeleteCompleted() {
  const arrTasks = localStorage();
  const incompleteTasks = arrTasks.filter((task) => !task.completed);
  const ul = document.getElementById('list');
  const checks = document.querySelectorAll('.checks');
  checks.forEach((check) => {
    if (check.checked) {
      ul.removeChild(check.parentNode.parentNode);
    }
  });

  return incompleteTasks;
}