import { getAge } from '../getAge'

describe('utils/getAge', () => {
  it('should calculate the right age of a person', () => {
    const birthDate = new Date('1980-02-20')
    jest.useFakeTimers().setSystemTime(new Date('2018-03-20'))
    expect(getAge(birthDate)).toBe(38)
  })

  it('should calculate the right age of a person (taking into account the months)', () => {
    const birthDate = new Date('1980-07-20')
    jest.useFakeTimers().setSystemTime(new Date('2018-03-20'))
    expect(getAge(birthDate)).toBe(37)
  })
})
