import { useState } from 'react'
import { CATEGORIES } from 'mocks/categories.mock'
import { getEmptyOption, INIT_FORM, INIT_NEWCATEGORY } from './helpRegister'

const useRegister = () => {
  const [form, setForm] = useState(INIT_FORM)
  const [newCategory, setNewCategory] = useState(INIT_NEWCATEGORY)
  const [unitQuantity, setUnitQuantity] = useState(getEmptyOption)
  const [showCategoryNew, setShowCategoryNew] = useState(false)

  const helps = {
    isShowCategoryNew: () => setShowCategoryNew(!showCategoryNew),
    verifySaving: () => {
      const isCategory = Object.values(CATEGORIES)
        .some(value => value.toLowerCase() === newCategory.value.toLowerCase())
      if (isCategory) setNewCategory({ ...newCategory, isCategoryExistence: true })
    }
  }

  const states = {
    form,
    showCategoryNew,
    unitQuantity,
    newCategory
  }

  const onChanges = {
    default: (event, name) => {
      const update = name
        ? ({ [name]: event })
        : ({ [event.target.name]: event.target.value })
      setForm({
        ...form,
        ...update
      })
    },
    unitQuantity: ({ target }) => {
      setForm({
        ...form,
        quantity: `${form.quantity} ${target.value}`.trim()
      })
      setUnitQuantity(target.value)
    },
    newCaterory: ({ target }) => setNewCategory({
      ...newCategory,
      value: target.value
    }),
    switch: ({ target }) => setForm({ ...form, isInventary: target.checked })
  }

  const onSubmit = () => {
    console.log('handleSaved', form)
    console.log('newCategory', newCategory)
  }

  return {
    helps,
    states,
    onChanges,
    onSubmit
  }
}

export default useRegister
