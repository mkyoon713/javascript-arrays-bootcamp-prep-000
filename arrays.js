var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")

function addElementToBeginningOfArray(array,element) {
 return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array [array.unshift(element)]
}
