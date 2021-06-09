const theyreTakingTheHobbitsTo = require('./theyreTakingTheHobbitsTo');

test("Where they're taking the hobbits to", () => {
  const whereTheyreTakingTheHobbits = jest.fn().mockReturnValue("They're taking the hobbits to Isengard")

  expect(whereTheyreTakingTheHobbits).toBe("They're taking the hobbits to Isengard");
});
