/**
 * Calculate the difference between two times.
 *
 * @param {String} The string is startTime.
 * @param {String} The string is endTime.
 * @returns {String} Returns the difference time.
 */

const timeDifference = function(startTime, endTime) {
  
  const date1 = new Date(startTime)

  const date2 = new Date(endTime)

  const difference = date2.getTime() - date1.getTime()

  const days = Math.floor(difference / (24 * 3600 * 1000))

  const leave1 = difference % (24 * 3600 * 1000)

  const hours = Math.floor(leave1 / (3600 * 1000))

  const leave2 = leave1 % (3600 * 1000)

  const minutes = Math.floor(leave2 / (60 * 1000))

  const leave3 = leave2 % (60 * 1000)

  const seconds = Math.round(leave3 / 1000)

  return `${days}天${hours}小时${minutes}分钟${seconds}秒`
}

export default timeDifference
