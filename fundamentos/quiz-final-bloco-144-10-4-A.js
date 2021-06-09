test('shows how async / await works', async () => {
  const value = Promise.resolve(true);
  expect(value).toBe(true);
});
