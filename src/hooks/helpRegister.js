import { QUANTITIES } from 'helps/selects'

export const INIT_FORM = {
  name: '',
  isInventary: false,
  description: '',
  quantity: '',
  price: 0,
  dateAlert: '',
  category: []
}

export const INIT_NEWCATEGORY = {
  value: '',
  isCategoryExistence: false
}

export const getEmptyOption = QUANTITIES[1]
