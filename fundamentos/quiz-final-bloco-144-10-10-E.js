const theyreTakingTheHobbitsTo = require('./theyreTakingTheHobbitsTo');

test("Where they're taking the hobbits to", () => {
  const whereTheyreTakingTheHobbits = jest.fn().mockReturnValue('Breakfast, second breakfast, elevenses, luncheon, afternoon tea, dinner and supper')

  expect(whereTheyreTakingTheHobbits).toBe('Breakfast, second breakfast, elevenses, luncheon, afternoon tea, dinner and supper');
});
