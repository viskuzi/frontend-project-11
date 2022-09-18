const getMatrix = (num) => {
  const result = [];
  for (let i = 0; i < num; i += 1) {
    const arr = [];
    for (let j = 0; j < num; j += 1) {
      if (j === i) {
        arr[j] = 1;
      } else {
        arr[j] = 0;
      }
    }
    result.push(arr);
  }

  return result;
};

export default getMatrix;
