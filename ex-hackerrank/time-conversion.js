function timeConversion(s) {

  let hour = Number(s.substring(0, 2))
  let timeFormat = s.substring(2, 8)


  if(hour != "12" && s.indexOf("PM") == 8) {
    hour += 12
  } else if(hour == "12" && s.indexOf("AM") == 8) {
    hour = "00"
  }

  if(hour <= 9 && hour != "00") {
    hour = "0" + hour
  }

  let finalOutput = hour + timeFormat

  console.log(finalOutput)

}

example = '12:40:22AM'

timeConversion(example)