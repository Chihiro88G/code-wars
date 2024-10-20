// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// original
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if(bmi <= 18.5) return "Underweight";
  if(bmi <= 25) return "Normal";
  if(bmi <= 30) return "Overweight";
  return "Obese";
}

// reference to see the way using nested ? & : 
function bmi(weight, height) {
  var bmi  = weight/(height*height);
  return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}