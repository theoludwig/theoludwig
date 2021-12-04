import { DIVLO_BIRTHDAY, getAge } from './getAge'

export const getDefaultDescription = (): string => {
  const age = getAge(DIVLO_BIRTHDAY)
  return `I'm Divlo, I'm ${age} years old, I'm from France - Developer Full Stack Junior • Passionate about High-Tech`
}
