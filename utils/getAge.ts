export const DIVLO_BIRTH_DATE_DAY = '31' as const
export const DIVLO_BIRTH_DATE_MONTH = '03' as const
export const DIVLO_BIRTH_DATE_YEAR = '2003' as const
export const DIVLO_BIRTH_DATE_STRING =
  `${DIVLO_BIRTH_DATE_DAY}/${DIVLO_BIRTH_DATE_MONTH}/${DIVLO_BIRTH_DATE_YEAR}` as const
export const DIVLO_BIRTH_DATE_ISO_8601 =
  `${DIVLO_BIRTH_DATE_YEAR}-${DIVLO_BIRTH_DATE_MONTH}-${DIVLO_BIRTH_DATE_DAY}` as const
export const DIVLO_BIRTH_DATE = new Date(DIVLO_BIRTH_DATE_ISO_8601)

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
