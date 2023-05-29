import { DIVLO_BIRTH_DATE, getAge } from '../../utils/getAge.ts'

const yearOld = document.getElementById('year-old')

yearOld.textContent = getAge(DIVLO_BIRTH_DATE).toString()
