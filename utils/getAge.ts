export const DIVLO_BIRTHDAY_DAY = '31'
export const DIVLO_BIRTHDAY_MONTH = '03'
export const DIVLO_BIRTHDAY_YEAR = '2003'
export const DIVLO_BIRTHDAY = new Date(
  `${DIVLO_BIRTHDAY_YEAR}-${DIVLO_BIRTHDAY_MONTH}-${DIVLO_BIRTHDAY_DAY}`
)

/**
 * Calculates the age of a person based on their birth date
 * @param birthDate
 * @returns
 */
export const getAge = (birthDate: Date): number => {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
