module.exports = function warmup(temperature) {
  var fahrenheitAtZeroDegrees = 32;
  var resultFahrenheit = 1.8;

  if(temperature !== 0) {
      resultFahrenheit *= temperature;
      resultFahrenheit += fahrenheitAtZeroDegrees;
  } else {
      resultFahrenheit = 0;
      resultFahrenheit += fahrenheitAtZeroDegrees;
  }

  return resultFahrenheit;
};