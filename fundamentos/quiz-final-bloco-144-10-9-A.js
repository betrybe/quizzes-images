const service = require('./service');

test("testando se a função foi chamada", () => {
  service.secondBreakfast() = jest.fn().mockReturnValue('lembas');

  expect(service.secondBreakfast()).toBe('lembas');
});
