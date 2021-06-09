import { map } from './map.js';


describe('array methods', () => {

  test('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback.', () => {

    const array = [1, 2, 3];
    const actual = map(array, (num) => num + 1);
    expect(actual).toEqual([2, 3, 4]);

  });
});
