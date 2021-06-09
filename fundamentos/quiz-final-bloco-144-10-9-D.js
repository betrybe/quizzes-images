const service = require('./service');

test("testando se a função foi chamada", () => {
  expect(service.secondBreakfast).toHaveBeenCalled();
});
