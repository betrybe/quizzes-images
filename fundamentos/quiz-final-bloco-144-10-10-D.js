const theyreTakingTheHobbitsTo = require('./theyreTakingTheHobbitsTo');

test("Where they're taking the hobbits to", () => {
  const whereTheyreTakingTheHobbits = jest.fn().mockImplementation((a, b) => a + b);

  whereTheyreTakingTheHobbits('second ', 'breakfast')
  expect(whereTheyreTakingTheHobbits).toBe('second breakfast');
});
