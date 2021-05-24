/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let resArr = [];
  let leftPointer = 0;
  let rightPointer = A.length - 1;
  let pointer = rightPointer;

  while (leftPointer <= rightPointer) {
    if (A[leftPointer] ** 2 > A[rightPointer] ** 2) {
      resArr[pointer--] = A[leftPointer++] ** 2;
    } else {
      resArr[pointer--] = A[rightPointer--] ** 2;
    }
  }

  return resArr;
};

console.log("sortedSquares", sortedSquares([-4, 0, 3]));
