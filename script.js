const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 function divide(arr, maxSum) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof maxSum !== 'number') {
      throw new Error('Invalid input');
    }
  
    let result = [];
    let currentSubarray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
  
      if (currentSubarray.reduce((sum, num) => sum + num, 0) + currentElement <= maxSum) {
        currentSubarray.push(currentElement);
      } else {
        result.push([...currentSubarray]);
        currentSubarray = [currentElement];
      }
    }
  
    if (currentSubarray.length > 0) {
      result.push(currentSubarray);
    }
  
    return result;
  }
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
