import * as utils from './utils'

const originalConsole = console;
global.fetch = jest.fn();
global.console = {
  log: jest.fn()
}

jest.useFakeTimers();

describe("utls", () => {
  beforeAll(() => {
    originalConsole.log('before all call');
  })
  beforeEach(() => {
    originalConsole.log('before each call');
    jest.clearAllMocks();
  })
  test('sum should correctly sum numbers', () => {
    originalConsole.log('test case call');

    expect(utils.sum(2, 3)).toBe(5);
  });

  test('fetchData should return response from endpoint', async () => {
    originalConsole.log('test case call');

    const mockResponse = {
      json: () => "data"
    }
    fetch.mockResolvedValue(mockResponse);

    const response = await utils.fetchData();
    expect(response).toBe("data");
  })

  test("delayedHello should print greeting to console after delay", () => {
    originalConsole.log('test case call');

    const name = 'Danilo';
    utils.delayedHello(name);

    expect(console.log).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(console.log).toHaveBeenCalledWith(`Hello, ${name}!`)
  })

  test('count should print counter every second', () => {
    originalConsole.log('test case call');

    utils.count();

    jest.advanceTimersByTime(3500);

    expect(console.log).toHaveBeenCalledTimes(3);
  })
})
