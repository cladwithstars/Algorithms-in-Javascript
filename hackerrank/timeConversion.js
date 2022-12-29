// convert from 12 hour AM/PM format to military time format

function timeConversion(s) {
  // Write your code here
  const isPM = s.slice(-2) === "PM";
  const time = s.slice(0, -2);
  const [h, m, secs] = time.split(":");
  if (isPM) {
    const hourAdjusted = h[0] === "0" ? Number(h[1]) : Number(h);
    const hour = h === "12" ? 12 : hourAdjusted + 12;
    return `${hour}:${m}:${secs}`;
  }
  if (h === "12") {
    return `00:${m}:${secs}`;
  }
  return time;
}

console.log(timeConversion("01:05:50AM"));
console.log(timeConversion("12:05:40AM"));
console.log(timeConversion("12:05:40PM"));
console.log(timeConversion("01:05:40PM"));
console.log(timeConversion("11:59:59PM"));
