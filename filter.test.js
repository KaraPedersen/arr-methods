import home from './filter.js';

describe('filter', () => {
  it('filters the array', () => {
    const array = ['chelsea', 'susan', 5, 'kara', true, undefined, 'christine'];

    const parameters = (item) => {
      return item[0] === 'c';
    };

    const newArray = home(array, parameters);

    expect(newArray).toEqual(['chelsea', 'christine']);
  });
});
