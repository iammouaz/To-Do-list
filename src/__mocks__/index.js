class Task {
  constructor(ind = 0, des = '', com = false) {
    this.index = ind;
    this.description = des;
    this.completed = com;
  }
}

export default function localStorage() {
  const task1 = new Task(1, 'task1');
  const task2 = new Task(2, 'task2');
  const task3 = new Task(3, 'task3', true);
  const arrayTask = [task1, task2, task3];
  return arrayTask;
}

exports.localStorage = localStorage;