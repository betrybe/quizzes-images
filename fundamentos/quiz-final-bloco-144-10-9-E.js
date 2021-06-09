const service = require('./service');

test("testando se a função foi chamada", () => {
  service.secondBreakfast() = jest.fn().mockReturnValue('PO-TA-TOES');

  expect(service.secondBreakfast).toHaveBeenCalled();
});
