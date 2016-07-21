// breakOut(array, changeValue, stopValue) which iterates through array
function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      // if the loop reaches stopValue
      break;
    }
    else {
    // change every element to changeValue
      array[i] = changeValue;
    }
  }
  return array;
}

// iterates through array and changes every element to changeValue
function keepGoing(array, changeValue, skipValue) {
  // except those that match skipValue. Then return the array.
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    else {
      array[i] = changeValue;
    }
  }
  return array;
}

//findBy(array, findFn) which looks for a value in array based on the return
function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
