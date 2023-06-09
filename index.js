const test = require('tape')

const openingBrackets = ['{', '[', '(']
const closingBrackets = ['}', ']', ')']

/**
 * Checks that each bracket has a matching closing
 * bracket and that they are nested correctly.
 * @param {string} str - The string to test.
 * @returns {boolean}
 */

function balancingBrackets(str) {
  const strArray = str.split('')
  // Use reducer to check each character. Use the accumulator (acc) to keep track of
  // opening brackets.
  const finalAcc = strArray.reduce(
    (acc, character, i, array) => {
      // If character is an opening bracket, add it to acc.
      if (openingBrackets.includes(character)) {
        acc.brackets.push(character)
        return acc
      }

      // If character is a closing bracket.
      if (closingBrackets.includes(character)) {
        // Get matching opening bracket.
        const closingBracketIndex = closingBrackets.indexOf(character)
        const matchingOpeningBracket = openingBrackets[closingBracketIndex]

        const accLastIndex = acc.brackets.length - 1

        // If the last opening bracket matches the current closing bracket.
        if (acc.brackets[accLastIndex] === matchingOpeningBracket) {
          // Remove the last opening bracket, because we found a match.
          // Next comparison will be against the parent of these brackets.
          acc.brackets.splice(accLastIndex, 1)
          return acc
        } else {
          // If not a match.
          acc.unopenedBracket = true
          // Break.
          array.splice(i)
          return acc
        }
      }

      return acc
    },
    { brackets: [], unopenedBracket: false }
  )

  // If the accumulator still has unmatched brackets, return false.
  if (finalAcc.brackets.length > 0 || finalAcc.unopenedBracket) {
    return false
  }
  return true
}

test('nested brackets', function (t) {
  t.plan(1)
  t.ok(balancingBrackets('{[()]}'))
})

test('siblings', function (t) {
  t.plan(1)
  t.ok(balancingBrackets('{[({},{})],[]}'))
})

test('non-bracket characters', function (t) {
  t.plan(1)
  t.ok(balancingBrackets('{[({anything},{})],[]}'))
})

test('overlapping brackets', async function (t) {
  t.plan(1)
  t.notOk(balancingBrackets('{[}]'))
})

test('single closing bracket', async function (t) {
  t.plan(1)
  t.notOk(balancingBrackets(']'))
})

test('single opening bracket', async function (t) {
  t.plan(1)
  t.notOk(balancingBrackets('['))
})
