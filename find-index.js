export default (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i]))  return i + 1;
  }
  return -1;
};
