import Select from 'react-select'
import useRegister from 'hooks/useRegister'
import Control from 'componentes/Control'
import InputNewCategory from 'componentes/InputNewCategory'
import IconCheckSave from 'assets/check-save.svg'
import { CATEGORIES } from 'mocks/categories.mock'
import { mapValues } from 'helps/maps'
import { colourStyles } from 'helps/colourStyle'
import { QUANTITIES } from 'helps/selects'
import './register.scss'

const Register = () => {
  const { helps, states, onChanges, onSubmit } = useRegister()

  return (
    <div className='container'>
      <div className='register-header'>
        <h1 className='title'>Registro</h1>
        <img src={IconCheckSave} onClick={onSubmit} className='icon-save' alt='' />
      </div>
      <Control name='Nombre de producto'>
        <input
          name='name'
          value={states.form.name}
          onChange={onChanges.default}
        />
      </Control>
      <label className='switch'>
        <input
          type='checkbox'
          name='isInventary'
          value={states.form.isInventary}
          onChange={onChanges.default}
        />
        <span className='slider round' />
      </label>
      <Control name='Descripcion'>
        <textarea
          rows='2'
          value={states.form.description}
          name='description'
          onChange={onChanges.default}
        />
      </Control>
      <Control name='Cantidad'>
        <div className='control-quantaty__container'>
          <input
            value={states.form.quantity}
            name='quantity'
            onChange={onChanges.default}
          />
          <select
            className='control-quantaty'
            onChange={onChanges.unitQuantity}
            value={states.unitQuantity}
          >
            {QUANTITIES.map(value => (
              <option
                key={value}
                value={value}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
      </Control>
      <Control name='Precio'>
        <input
          type='number'
          value={states.form.price}
          name='price'
          onChange={onChanges.default}
        />
      </Control>
      <Control name='Fecha de Alerta'>
        <input
          type='date'
          value={states.form.dateAlert}
          name='dateAlert'
          onChange={onChanges.default}
        />
      </Control>
      <div className='register__form-category'>
        <span className='link' onClick={helps.isShowCategoryNew}>
          ¿Quieres crear una categoria nueva?
        </span>
        {states.showCategoryNew && <InputNewCategory
          value={states.newCategory.value}
          onChange={onChanges.newCaterory}
          isError={states.newCategory.isCategoryExistence}
          onSubmit={helps.verifySaving}
                                   />}
        <Control name='Categoria'>
          <Select
            isMulti
            options={mapValues(Object.values(CATEGORIES))}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder='Seleccione las categorias'
            styles={colourStyles}
            value={states.form.category}
            onChange={(e) => onChanges.default(e, 'category')}
          />
        </Control>
      </div>
    </div>
  )
}

export default Register
