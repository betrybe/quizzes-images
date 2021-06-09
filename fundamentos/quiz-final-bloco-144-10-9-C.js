const service = require('./service');

test("testando se a função foi chamada", () => {
  service.secondBreakfast() = jest.fn().mockReturnValue('mushrooms');

  expect(service.secondBreakfast).toHaveBeenCalledWith('honey cake');
});
