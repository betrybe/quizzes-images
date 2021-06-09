const service = require('./service');

test("testando se a função foi chamada", () => {
  service.secondBreakfast() = jest.fn().mockReturnValue('fish');

  expect(service.secondBreakfast).toHaveBeenCalledTimes(2);
});
