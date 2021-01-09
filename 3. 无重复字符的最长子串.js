var lengthOfLongestSubstring = function (s) {

  let tempArr = [],
    arr = s.split(''),
    resArr = []

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j] === arr[i]) {
        tempArr = tempArr.slice(j + 1)
        break
      }
    }
    tempArr.push(arr[i])
    if (tempArr.length > resArr.length) {
      resArr = tempArr
    }
    
  }

  return resArr.length

}