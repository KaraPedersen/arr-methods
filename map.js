


export function map(array, callback) {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
    newArray[i] = callback(array[i]);

  }
  return newArray;
}
