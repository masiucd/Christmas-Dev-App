import { reverseName } from '../utils/helpers';
import * as math from '../utils/math';
import * as app from '../utils/helpers';

jest.mock('../utils/math');

describe('testing helpers', () => {
  it('reverseName ', () => {
    const name = 'marcell';
    let res = 'llecram';
    expect(reverseName(name)).toBe(res);
  });

  test('calls math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalled();
    expect(math.add).toHaveBeenCalledTimes(1);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test('calls math.subtract', () => {
    app.doSubtract(10, 5);
    expect(math.subtract).toHaveBeenCalled();
    expect(math.subtract).toHaveBeenCalledTimes(1);
    expect(math.subtract).toHaveBeenCalledWith(10, 5);
  });
});
