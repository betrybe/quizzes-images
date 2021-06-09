test('shows how async / await works', async () => {
  const value = Promise.resolve(true);
  await expect(value).toBe(true);
});
