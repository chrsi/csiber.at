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
 * Evaluate the skills and create a coefficient that ranks them skills based on a defined formular.
 * in: { name, occurrences: [ {start, end, weight}, {start, end, weight} ] }
 * @param {*} skills 
 */
export function evaluateSkill(skill, _, skills) {
  var firstSkill = skills.flatMap(skill => skill.occurrences).reduce((prev, curr) => {
    const currentDate = Date.parse(curr.start);
    return currentDate < prev ? currentDate : prev;
  }, Date.now())
  var scores = skill.occurrences.map(occurrence => {
    const recency = evaluateRecency(occurrence);
    const weight = evaulateWeight(occurrence);
    const duration = evaluateDuration(occurrence, firstSkill);
    return (recency + duration) * weight * 4;
  });

  return {
    name: skill.name,
    score: scores.reduce((prev, curr) => prev+ curr)
  }
}

/**
 * Merges a list of skills based on a skill name. Each skill is accompanied with a start and end date where it was used as well as a weight coefficient.
 * After the merge process a list of skills with their occurrences in a list is returned.
 * in: [ { name, start, end, weight }, {name, start, end, weight }]
 * out: [ { name, occurrences: [ {start, end, weight}, {start, end, weight} ] } ]
 * @param {array<skill>} skills the resulting list of skills where each skill will be present only once.
 * @param {skill} currentSkill a skill that should be put into the resulting list.
 */
export function mergeSkills(skills, currentSkill) {
  let existingSkill = skills.find(skill => skill.name === currentSkill.name);
  if (existingSkill === undefined) {
    existingSkill = { name: currentSkill.name, occurrences: [] };
    skills.push(existingSkill)
  }
  existingSkill.occurrences.push({
    start: currentSkill.start,
    end: currentSkill.end,
    weight: currentSkill.weight
  });
  return skills
}

/**
 * Evaluate the recency of a skill occurrence.
 * The recency should be rather high in case the skill ended quite recently or not at all.
 * On the other hand it should be rather low if it ended a long time ago.
 * @param {skillOccurrence} skillOccurrence 
 * @returns (0,1] - lower values mean long ago / higher values mean quite recently.
 */
function evaluateRecency(skillOccurrence) {
  if (skillOccurrence.end == null) return 1;
  const refDate = Date.parse('2015-01-01T00:00:00.000Z');

  var latestEndDate = Date.now();
  var endDate = Date.parse(skillOccurrence.end);
  return (endDate-refDate)/(latestEndDate-refDate);
}

/**
 * Evaluate a normalized weight that should be between 0 and 1
 */
function evaulateWeight(skill) {
  return skill.weight / 100;
}

/**
 * Evaluate the duration of a specific skill occurrence.
 * The longer the duration the closer the value will be to 1.
 * @param {skillOccurrence} occurrence 
 * @param {Date} startReference 
 * @returns (0,1] - lower values mean short duration / higher values mean long duration.
 */
function evaluateDuration(occurrence, startReference) {
  var latestEndDate = Date.now();
  var endDate = occurrence.end == null ? latestEndDate : Date.parse(occurrence.end);
  var startDate = Date.parse(occurrence.start);
  const currentDuration = endDate === startDate ? 1 : endDate-startDate;
  const generalDuration = latestEndDate === startReference ? 1 : latestEndDate - startReference
  return currentDuration/generalDuration
}
