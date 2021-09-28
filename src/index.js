import _ from 'lodash';
import './style.css';


const tasks = [
    { title: 'Go out for Walk', finished: true, index: 1 },
  { title: 'Do my Homework', finished: false, index: 0 },
   { title: 'Make Dinner', finished: true, index: 2 }
];

const addList = (desc, completed, index) => {
  const MakeList = document.createElement('li');
  MakeList.classList.add('list-item')
  const Input = document.createElement('input');
  Input.classList.add('jobs')
  Input.setAttribute('type', 'checkbox');
  Input.checked = completed;
  MakeList.textContent = desc;
  MakeList.prepend(Input);
  const Div = document.createElement('div');
  Div.classList.add('test');
  MakeList.append(Div);
  MakeList.id = index;
  return MakeList;
};

const populateHtml = (arr) => {
  const myUl = document.getElementById('list');
  for (let i = 0; i < arr.length; i += 1) {
    arr.sort((a, b) => ((a.index > b.index) ? 1 : -1));
    myUl.appendChild(addList(arr[i].title, arr[i].finished, arr[i].index));
  }
};

populateHtml(tasks);