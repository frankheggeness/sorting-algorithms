let dummyArray = [5, 14, 23, 50, 2, 1, 0]

function selectionSort(array) {
  let sorted = array
  for (i = 0; i < sorted.length; i++) {
    for (y = 0; y < sorted.length; y++) {
      let smallest = sorted[i];
      if (smallest > sorted[y]) {
        smallest = sorted[y]
        sorted[y] = sorted[i]
        sorted[i] = smallest
      }
    }
  }
  return sorted
}

console.log(selectionSort(dummyArray))