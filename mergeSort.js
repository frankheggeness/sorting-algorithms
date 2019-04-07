let dummyArray = [5, 14, 23, 50, 2, 1, 0]

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let halfArrayLength = Math.ceil(array.length / 2);

  var leftSide = array.splice(0, halfArrayLength);

  let leftMerge = mergeSort(leftSide);

  let rightMerge = mergeSort(array);

  let output = []
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < leftMerge.length && indexRight < rightMerge.length) {
    if (leftMerge[indexLeft] < rightMerge[indexRight]) {
      output.push(leftMerge[indexLeft]);
      indexLeft++;
    } else {
      output.push(rightMerge[indexRight]);
      indexRight++;
    }
  }
  return output.concat(leftMerge.slice(indexLeft)).concat(rightMerge.slice(indexRight))
}

console.log(mergeSort(dummyArray))