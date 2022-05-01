import { evaluateSkill, mergeSkills } from './Skill'

test('should merge occurrences of the same skill', () => {
    const skillMap = [
        {
            name: 'java',
            start: "2021-06-16T00:00:00.000Z",
            end: null,
            weight: 100
        },
        {
            name: 'java',
            start: "2019-01-01T00:00:00.000Z",
            end: "2019-05-01T00:00:00.000Z",
            weight: 50
        }
    ]

    const result = skillMap.reduce(mergeSkills, []);
    expect(result).toEqual([ {
        name: 'java',
        occurrences: [
            {
                start: "2021-06-16T00:00:00.000Z",
                end: null,
                weight: 100
            },
            {
                start: "2019-01-01T00:00:00.000Z",
                end: "2019-05-01T00:00:00.000Z",
                weight: 50
            }
        ]
    } ])
})
