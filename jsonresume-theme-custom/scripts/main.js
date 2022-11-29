import { DIVLO_BIRTHDAY, getAge } from '../../utils/getAge.ts'

const yearOld = document.getElementById('year-old')

yearOld.textContent = getAge(DIVLO_BIRTHDAY).toString()
