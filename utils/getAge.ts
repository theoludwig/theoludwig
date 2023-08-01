export const BIRTH_DATE_DAY = '31' as const
export const BIRTH_DATE_MONTH = '03' as const
export const BIRTH_DATE_YEAR = '2003' as const
export const BIRTH_DATE_STRING =
  `${BIRTH_DATE_DAY}/${BIRTH_DATE_MONTH}/${BIRTH_DATE_YEAR}` as const
export const BIRTH_DATE_ISO_8601 =
  `${BIRTH_DATE_YEAR}-${BIRTH_DATE_MONTH}-${BIRTH_DATE_DAY}` as const
export const BIRTH_DATE = new Date(BIRTH_DATE_ISO_8601)

/**
 * Calculates the age of a person based on their birth date.
 * @param birthDate
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
