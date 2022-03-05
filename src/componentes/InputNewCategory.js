import Control from 'componentes/Control'

const InputNewCategory = ({ value, onChange, isError, onSubmit }) => (
  <>
    <Control name='Nueva Categoria'>
      <input
        value={value}
        onChange={onChange}
      />
    </Control>
    {isError && (<span className='error'>La categoria ya existe</span>)}
    <button
      className='btn'
      onClick={onSubmit}
    >Guardar
    </button>
  </>
)

export default InputNewCategory
