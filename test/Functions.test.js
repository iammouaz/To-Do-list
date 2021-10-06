import { getFromLocal } from '../src/Functions';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('getTodolist', () => {
  const todo = getFromLocal();
  test('Get The data from localStorage', () => {
    expect(typeof todo).toBe('object');
  });
});
