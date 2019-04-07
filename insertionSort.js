let dummyArray = [5, 14, 23, 50, 2, 1, 0]

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var place = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > place) {
      array[j + 1] = array[j];
      j--;
    }
    //     console.log(j)
    array[j + 1] = place;
    //     console.log(place)
    //     console.log(array[i])
  }
  return array;
}

console.log(insertionSort(dummyArray))


