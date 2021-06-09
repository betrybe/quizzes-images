test('shows how async / await works', () => {
  const value = await Promise.resolve(true);
  expect(value).toBe(true);
});
