const theyreTakingTheHobbitsTo = require('./theyreTakingTheHobbitsTo');

test("Where they're taking the hobbits to", () => {
  const whereTheyreTakingTheHobbits = jest.spyOn(theyreTakingTheHobbitsTo, 'Isengard');

  whereTheyreTakingTheHobbits('Isengard');
  expect(whereTheyreTakingTheHobbits).toBe("They're taking the hobbits to Isengard");
});
