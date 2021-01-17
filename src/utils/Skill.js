/**
 * Normalize an array of skill entries based on a lower and upper bound.
 * After the normalization all values are distributed between the defined bounds.
 * @param {number} lowerBound The minimum value that's allowed after normalization
 * @param {number} upperBound The maximum value that's allowed after normalization
 */
export function normalizeSkills(lowerBound, upperBound) {
  return function(element, _, array) {
    const maxValue = array[0][1];
    const minValue = array[array.length-1][1];

    const elementCopy = [...element];
    elementCopy[1] = (minValue/maxValue)*element[1]*(upperBound-lowerBound)+lowerBound;
    return elementCopy
  }
}

/**
 * Aggregate a list of skills to a list of distinct skills with a count value.
 * The count value marks the number of occurrences of the specific skill
 * @param {array} skills Unordered list of skills with duplicates
 * @param {object} currentSkill A specific skill
 * @example
 * const skills = ['a', 'b', 'a', 'c']
 * skills.reduce(countSkills, [])
 * // returns [ ['a', 2], ['b', 1], ['c', 1] ]
 */
export function countSkills(skills, currentSkill) {
  const existingSkill = skills.find(skill => skill[0] === currentSkill);
  if (existingSkill === undefined) {
    skills.push([
      currentSkill,
      1
    ])
  } else {
    existingSkill[1]++
  }
  return skills;
}