describe('addTodoLs', () => {
  const first = { description: 'test', index: 0 };
  const wrong = { description: "I'm not in lS" };

  test('Add todo to local storage ', () => {
    expect(first).toEqual({ description: 'test', index: 0 });
  });

  test('getting the right object', () => {
    expect(first).not.toEqual([wrong]);
  });
});