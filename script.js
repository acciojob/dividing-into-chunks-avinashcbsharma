const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            result.push([...currentSubarray]);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    if (currentSubarray.length > 0) {
        result.push([...currentSubarray]);
    }
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
