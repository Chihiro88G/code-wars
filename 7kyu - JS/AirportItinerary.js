// When you travel around the world you pass though different airports.

// TRN -> FCO -> JFK
// And then return back to home

// JFK - TRN
// In order to propose the unique list of airports that your trip uses we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

// For example, a trip with:

// [TRN-FCO] [FCO-JFK] [JFK-TRN]
// Should be represented as:

// TRN-FCO-JFK-TRN
// That is the unique list of airport steps.

// Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.

// [
//   {in: "TRN", out: "FCO"},
//   {in: "FCO", out: "JFK"},
//   {in: "JFK", out: "FCO"}
// ]
// Now we have to create a helper function itinerary for JS that extract the unique airport list:

// travel = itinerary([
//   {in: "TRN", out: "FCO"},
//   {in: "FCO", out: "JFK"},
//   {in: "JFK", out: "FCO"}
// ]); // TRN-FCO-JFK-FCO


// someone1
function itinerary2(travel) {
  return travel.reduce((acc, item, index) => {
    if (index === 0) {
      return `${item.in}-${item.out}`;
    }
    
    const previousOut = travel[index - 1].out;
    if (item.in === previousOut) {
      return `${acc}-${item.out}`;
    }
    
    return `${acc}-${item.in}-${item.out}`;
  }, '');
}

// someone2
function itinerary3(travel) {
  const result = [];
  let prevAirport = '';
  for (let i = 0; i < travel.length; i++) {
    if (travel[i].in !== prevAirport)
      result.push(travel[i].in);
    result.push(prevAirport = travel[i].out);
  }
  return result.join('-');
}

itinerary2([ { in: 'TRN', out: 'FCO' }, {in: "CIA", out: "JFK"} ])


const obj = {
  in: 'sample',
  out: 'test',
}

// this works in case of static property access
console.log(obj.in)

// in case of dynamic access only below works
console.log(obj['in'])


// long time ago
function itinerary(travel) {
  // travel = [ { in: 'TRN', out: 'FCO' }, {in: "CIA", out: "JFK"} ]

  let itinerary = '';
  let lastItemOut = '';

  travel.map(item => {
    if (!lastItemOut) {
      itinerary = `${item['in']}-${item['out']}`;
      lastItemOut = item['out'];    
      return;
    } 
    
    if (item['in'] === lastItemOut) {
      itinerary = itinerary + `-${item['out']}`;
      return;
    }
    itinerary = itinerary + `-${item['in']}-${item['out']}`;
    return itinerary;
  })
}


function Practice() {
  const array1 = [1, 2, 3, 4];

  return array1.reduce((acc, cur) => {
    return acc + cur;
  })
}

console.log(Practice())


