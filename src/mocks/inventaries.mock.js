import { CATEGORIES } from 'mocks/categories.mock'

export const INVENTARIES = [
  { name: 'brócoli', isInventary: true, categories: [CATEGORIES.vegetables] },
  { name: 'aceite', isInventary: true, categories: [CATEGORIES.seasoning] },
  { name: 'sal', isInventary: true, categories: [CATEGORIES.seasoning] },
  { name: 'azucar', isInventary: true, categories: [CATEGORIES.seasoning] },
  { name: 'queso', isInventary: false, categories: [CATEGORIES.breakfast] },
  { name: 'huevo', isInventary: true, categories: [CATEGORIES.breakfast, CATEGORIES.lunch] },
  { name: 'manzanilla', isInventary: false, categories: [CATEGORIES.herbs] },
  { name: 'manjar', isInventary: true, categories: [CATEGORIES.sweets] },
  { name: 'frejol', isInventary: true, categories: [CATEGORIES.menestras] },
  { name: 'shampoo', isInventary: true, categories: [CATEGORIES.lavar] },
  { name: 'pollo', isInventary: false, categories: [CATEGORIES.meat] },
  { name: 'pescado', isInventary: false, categories: [CATEGORIES.meat] }
]
