let dummyArray = [5, 14, 23, 50, 2, 1, 0]

function quickSort(array) {
  if (array.length < 2) {
    return array
  }

  let bigArray = [];
  let smallArray = [];
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] < array[array.length - 1]) {
      smallArray.push(array[i])
    } else {
      bigArray.push(array[i])
    }
  }
  let pivotArray = array.pop()

  return quickSort(smallArray).concat(pivotArray, quickSort(bigArray))
}

console.log(quickSort(dummyArray))