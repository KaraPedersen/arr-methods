import findIndex from './find-index.js';

describe('findIndex', () => {
  it('returns the index of the first item whose callback returns true', () => {
    const array = [0, 1, 2, 3, undefined, 4, 5];
    const parameters = (item) => {
      return (item === 5);
    };
    expect(findIndex(array, parameters)).toEqual(7);
  
  });
});
