/**
 * Returns a date as a string value in ISO 8601 format (without time information).
 *
 * @param date
 * @returns
 * @example getISODate(new Date("2012-05-23")) // "2012-05-23"
 */
export const getISODate = (date: Date): string => {
  return date.toISOString().slice(0, 10)
}

/**
 * Calculates the age of a person based on their birth date.
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
