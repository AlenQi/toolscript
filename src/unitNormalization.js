var num = 1.256
Math.floor(Math.round(num * 100)) / 100

function unitNormalization(arr, digit) {
  /*单位规整*/
  digit = digit || 0
  const prence = Math.pow(10, digit)
  if (Array.isArray(arr)) {
    var backArr = []
    for (var i = 0; i < arr.length; i++) {
      backArr.push(Math.rou(Math.round(arr[i] * prence)) / prence)
    }
    return backArr
  } else {
    var num = Math.floor(Math.round(arr * prence)) / prence
    return num
  }
}

unitNormalization(1.253, 2) //1.25
unitNormalization(1.257, 2) //1.26
