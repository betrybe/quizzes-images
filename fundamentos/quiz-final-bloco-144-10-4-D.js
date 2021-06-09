test('shows how async / await works', await () => {
  const value = async Promise.resolve(true);
  expect(value).toBe(true);
});
