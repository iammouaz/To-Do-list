/**
 * @jest-environment jsdom
 */
import { addElement } from '../src/Functions';

const arr = [];
describe(addElement, () => {
  // Act
  const result = addElement('first task', true);
  test('Returns a true values ', () => {
    // Assert
    expect(typeof result).not.toEqual({ description: 'first task', completed: false });
  });

  test('Correct creation of the index atribute', () => {
    addElement('Secondtodo', arr);
    expect(arr.length).toBe(0);
  });

  test('Returns an object', () => {
    addElement('thirdtodo', arr);
    expect(typeof arr).toEqual('object');
  });
});