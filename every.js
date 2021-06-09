export default (array, callback) => {
  let truthy = 1;
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      truthy = 1;
    } else {
      truthy = -1;
    }
    if(truthy === -1) return false;
  }
  return true;
};
