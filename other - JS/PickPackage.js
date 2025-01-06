// Pick the packages from the heaviest to the lightest one.
//   Rules
// You work in an automated factory that controls a robotic arm to move packages. The arm can pick packages from the conveyor belts to form a stack of packages.

// The packages are sorted from the heaviest to the lightest on each of the conveyor belts. Your objective is to pick the heaviest package among the 3 conveyor belts to move it on a stack.

//   Implementation
// Implement the function solve(weight0, weight1, weight2) that takes 3 integer arguments: weight0, weight1 and weight2. These values represent the weight of the packages available on the conveyor belts with respective index 0, 1 and 2. When a conveyor belt is empty, the value is 0.

// The function must return the index of the conveyor belt that has the heaviest package. For example, if the values for weight0, weight1 and weight2 are 85, 100 and 90, then the expected answer is 1. In case of equality, any correct answer is accepted.

// The function solve(weight0, weight1, weight2) will be called successively until all the conveyor belts are empty.


// my option 1
function solve(weight0, weight1, weight2) {
  if (weight0 >= weight1 && weight0 >= weight2) {
      return 0;
  } else if (weight1 >= weight0 && weight1 >= weight2) {
      return 1;
  } else {
      return 2;
  }
}

// my option 2 (no need to use array and sort esp. if the array size gets bigger)
function solve(weight0, weight1, weight2) {

  const heaviest = [weight0, weight1, weight2].sort((a, b) => a - b)[2]
  if (heaviest == weight0) return 0
  if (heaviest == weight1) return 1
  return 2;
}