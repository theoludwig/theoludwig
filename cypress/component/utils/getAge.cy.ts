import { getAge } from '../../../utils/getAge'

describe('utils/getAge', () => {
  it('should calculate the right age of a person', () => {
    cy.clock(new Date('2018-03-20')).then(() => {
      const birthDate = new Date('1980-02-20')
      expect(getAge(birthDate)).equal(38)
    })
  })

  it('should calculate the right age of a person (taking into account the months)', () => {
    cy.clock(new Date('2018-03-20')).then(() => {
      const birthDate = new Date('1980-07-20')
      expect(getAge(birthDate)).equal(37)
    })
  })
})
