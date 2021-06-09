const theyreTakingTheHobbitsTo = require('./theyreTakingTheHobbitsTo');

test("Where they're taking the hobbits to", () => {
  const whereTheyreTakingTheHobbits = jest.fn().mockImplementation((a) => a + '-TA-TOES');
  whereTheyreTakingTheHobbits('PO')
  expect(whereTheyreTakingTheHobbits).toBe("PO-TA-TOES");
});
