var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array, element){
  return array.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return array.shift()
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  return array.pop()
}
