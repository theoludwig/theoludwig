import { BIRTH_DATE, getAge } from '../../utils/getAge.ts'

const yearOld = document.getElementById('year-old')

yearOld.textContent = getAge(BIRTH_DATE).toString()
