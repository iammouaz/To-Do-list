class Task {
  constructor(i, c = false, d) {
    this.index = i;
    this.completed = c;
    this.description = d;
  }
}

const chkboxStatus = (item) => item.checked;

export default chkboxStatus;

let myList = [];

const saveStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(myList));
};

const addLi = (ul, index, completed, description) => {
  const task = document.createElement('li');
  const cBox = document.createElement('input');
  cBox.type = 'checkbox';
  cBox.id = index;
  cBox.checked = completed;
  cBox.addEventListener('change', () => {
    if (chkboxStatus(cBox)) {
      myList[parseInt(cBox.id, 10)].completed = true;
    } else {
      myList[parseInt(cBox.id, 10)].completed = false;
    }
    saveStorage();
  });
  const label = document.createElement('label');
  label.contentEditable = true;
  label.innerText = description;
  label.addEventListener('focusout', (e) => {
    label.parentNode.style.backgroundColor = 'initial';
    label.parentNode.childNodes[2].childNodes[0].style.display = 'initial';
    label.parentNode.childNodes[2].childNodes[2].style.display = 'none';
    myList[parseInt(cBox.id, 10)].description = e.composedPath()[0].innerText;
    saveStorage();
    setTimeout(() => {
      label.parentNode.childNodes[2].style.pointerEvents = 'none';
    }, 500);
  });
  const elBtn = document.createElement('button');
  elBtn.className = 'element-button';
  elBtn.addEventListener('click', (e) => {
    // eslint-disable-next-line no-use-before-define
    Delete(ul, e.currentTarget.parentNode.childNodes[0].id);
    e.target.closest('li').remove();
  }, false);
  const icon = document.createElement('i');
  icon.className = 'fas fa-ellipsis-v';
  const icon2 = document.createElement('i');
  icon2.className = 'fas fa-trash';
  elBtn.append(icon, icon2);
  task.append(cBox, label, elBtn);
  ul.prepend(task);
};

const refresh = (ul) => {
  while (ul.hasChildNodes()) ul.removeChild(ul.firstChild);
  for (let i = 0; i < myList.length; i += 1) myList[i].index = i;
  myList.forEach((task) => {
    addLi(ul, task.index, task.completed, task.description);
  });
  saveStorage();
};

const Delete = (ul, index) => {
  myList = myList.filter((e) => e.index !== parseInt(index, 10));
  refresh(ul);
};

const removeCompleted = (ul) => {
  myList = myList.filter((e) => e.completed !== true);
  refresh(ul);
};

const getFromLocal = (ul) => {
  myList = JSON.parse(localStorage.tasks);
  myList.forEach((task) => {
    addLi(ul, task.index, task.completed, task.description);
  });
};

const addElement = (ul, completed, description) => {
  myList.push(new Task(myList.length, completed, description));
  addLi(ul, myList.length - 1, completed, description);
  saveStorage();
};

export { getFromLocal, addElement, removeCompleted };