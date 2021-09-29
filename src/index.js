/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import './style.css';
import * as Functions from './Functions.js';

const boxList = document.getElementById('box-list');
const ul = document.createElement('ul');
ul.classList.add('item-list');

const createBox = () => {
  const top = document.createElement('div');
  const title = document.createElement('h2');
  title.classList.add('title');
  top.classList.add('top');
  title.innerHTML = "Today's To Do";
  top.append(title);
  boxList.appendChild(top);
  const form = document.createElement('form');
  const input = document.createElement('input');
  const arrow = document.createElement('i');
  input.type = 'text';
  input.placeholder = 'Add to your list';
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.value !== '') {
        Functions.addElement(ul, false, input.value);
        input.value = '';
      }
    }
  });
  arrow.classList.add('fas', 'fa-level-down-alt');
  form.append(input, arrow);
  boxList.append(form, ul);
  const bottom = document.createElement('div');
  bottom.classList.add('bottom');
  const clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-btn');
  clearBtn.innerText = 'Clear all completed';
  clearBtn.addEventListener('click', () => {
    Functions.removeCompleted(ul);
  }, false);
  bottom.appendChild(clearBtn);
  boxList.appendChild(bottom);
};

window.onload = () => {
  createBox();
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    Functions.getFromLocal(ul);
  }
};