import filter from './filter.js';

describe('filter', () => {
  it('filters the array', () => {
    const array = ['chelsey', 'susan', 5, 'kara', true, undefined, 'christine'];

    const parameters = (item) => {
      return item[0] === 'c';
    };

    const newArray = filter(array, parameters);

    expect(newArray).toEqual(['chelsey', 'christine']);
  });
});
