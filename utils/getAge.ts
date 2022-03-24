export const DIVLO_BIRTHDAY_DAY = '31' as const
export const DIVLO_BIRTHDAY_MONTH = '03' as const
export const DIVLO_BIRTHDAY_YEAR = '2003' as const
export const DIVLO_BIRTHDAY_DATE =
  `${DIVLO_BIRTHDAY_DAY}/${DIVLO_BIRTHDAY_MONTH}/${DIVLO_BIRTHDAY_YEAR}` as const
export const DIVLO_BIRTHDAY_DATE_ISO_8061 =
  `${DIVLO_BIRTHDAY_YEAR}-${DIVLO_BIRTHDAY_MONTH}-${DIVLO_BIRTHDAY_DAY}` as const
export const DIVLO_BIRTHDAY = new Date(DIVLO_BIRTHDAY_DATE_ISO_8061)

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
