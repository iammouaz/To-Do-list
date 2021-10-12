export default function utilPopulate(arr) {
  const orderArray = [];
  const ul = document.getElementById('list');
  ul.innerHTML = '';
  for (let i = 1; i < arr.length + 1; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === arr[j].index) {
        orderArray.push(arr[j]);
      }
    }
  }
  orderArray.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = ` 
    <div class  = "d-flex-between">
      <input type="checkbox" class="checks" id="${task.index}" value="${task.index}">
      <input type="text" value="${task.description}" class="edit-task" disabled>
    </div> 
    <button class="edit-button task-buttons">
      <i class="bi bi-three-dots-vertical icon-btn"></i>
    </button>
    <button class="delete-button task-buttons d-none">
      <i class="bi bi-trash"></i>
    </button>`;
    li.classList.add('tasks', 'd-flex-between');
    li.setAttribute('draggable', true);
    ul.appendChild(li);
  });

  return orderArray;
}