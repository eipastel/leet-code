function timeConversion(s) {

  let splited = s.split('')
  let hours = parseInt(splited[0] + splited[1])
  let minutes = splited[3] + splited[4]
  let seconds = splited[6] + splited[7]

  if(hours >= 12 && splited[8] === "A") {
    hours = hours - 12
  } else if(hours < 12 && splited[8] === "P") {
    hours += 12
  }


  if(hours < 10) {
    return `0${hours}:${minutes}:${seconds}`
  } else {
    return `${hours}:${minutes}:${seconds}`
  }

}

example2 = '04:59:59AM'

console.log(timeConversion(example2))