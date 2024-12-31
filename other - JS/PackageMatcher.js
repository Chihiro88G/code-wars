// As the owner of an online store, you need to fulfill orders everyday. To optimize the packing of each order, you decide to write an algorithm to match lBoxes and items based on their respective sizes.
// You have access to the following two lBoxes:
// - A medium lBox (identifier: M)
// - A large lBox (identifier: L)
// When possible, you should try to fit multiple items in the same lBox but lBoxes can only contain one type of product.
// This is the list of items you sell along with associated lBoxes:
// - Camera (identifier: Cam): one can fit in a medium lBox, and up to two can fit in a large lBox
// - Gaming Console (identifier: Game): too big for a medium lBox, but up to two can fit in a large lBox
// - max of 2 g consoles can fit in 1 lBox
// - Bluetooth speaker (identifier: Blue): one can fit in a large lBox . max is 1 per large lBox
// Your goal is to design a function that takes a list of items and returns the lBox & item matches (examples below).
// Your solution should work for any number of each item greater than or equal to zero.
// Input = [], Output = []

// ## Input/Output expectations
// ["Cam"] -> [M: ["Cam"]]
// ["Cam", "Game"] -> [M: ["Cam"], L: ["Game"]]
// ["Game", "Blue"] -> [L: ["Game"], L : ["Blue"]]
// ["Game", "Game", "Blue"] -> [L: ["Game", "Game"], L : ["Blue"]]
// ["Cam", "Cam", "Game", "Game"] -> [L: ["Cam", "Cam"], L: ["Game", "Game"]]
// ["Cam", "Cam", "Cam", "Game", "Game", "Game", "Cam", "Blue"] ->
// [L: ["Cam", "Cam"], L: ["Cam", "Cam"], L: ["Game", "Game"], L: ["Game"], L: ["Blue"]]
// ["Cam", "Cam", "Cam", "Game", "Game", "Cam", "Cam", "Blue", "Blue"] -> [L: ["Cam", "Cam"] , L: ["Cam", "Cam"] , M: ["Cam"] , L: ["Game", "Game"] , L: ["Blue"] , L: ["Blue"]]


const ITEM_MAX = {
  'M': {
    'Cam': 1,
  },
  'L': {
    'Cam': 2,
    'Game': 2,
    'Blue': 1,
  }
}

const MatchPackage = (items) => {
  const matchedPackeges = [];

  const want = {
      'Cam': 2,
      'Blue': 1,
    }

  const itemCountsObj = {};

  items.forEach(item => {
    if (item in itemCountsObj) {
      itemCountsObj[item] += 1
      return;
    }

    itemCountsObj[item] = 1
  });

  const want2 = [
    {L: ["Cam", "Cam"]},
    {L: ["Game", "Game"]},
  ]

  const output = [];

  console.log(itemCountsObj)

  for (const item in itemCountsObj) {
    let count = itemCountsObj[item];
    let lBox = [];

    if (item === 'Cam') {
      let mBox = [];

      while (count > 0) {
        if (count == 1) {
          mBox.push(`'${item}'`)
          output.push(`M: [${ mBox }]`)
        }

        if (count % 2 == 0) {
          lBox.push(`'${item}'`)

          if (lBox.length == 2) {
            output.push(`L: [${ lBox }]`)
          }
        }
        count -= 1
      }
    
    } else {
      while (count > 0) {
        if (lBox.length >= ITEM_MAX['L'][item]) {
          output.push(`L: [${ lBox }]`)
          lBox = [];
        } else {
          lBox.push(`'${item}'`)
          count -= 1
        }
      }

      if (lBox.length > 0) {
        output.push(`L: [${ lBox }]`)
      }
    }
  }

  console.log(output);

}

MatchPackage(["Cam", "Cam", "Cam", "Game", "Game", "Cam", "Cam", "Blue", "Blue"])