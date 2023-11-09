function firstRecurringCharacterWithLoop(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        return array[i]
      }
    }
  }

  return undefined
}



firstRecurringCharacterWithLoop(testArr)
const testArr = [2,1,1,2,3,5,1,2,4]
function firstRecurringCharacterWithHashTable(input) {
  let map = {};
  for(let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }

    console.log(map)
  }

  return undefined;
}

firstRecurringCharacterWithHashTable(testArr)