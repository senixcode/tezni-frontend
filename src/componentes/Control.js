const Control = ({ name, children }) => (
  <div className='form-control'>
    <label>{name}</label>
    {children}
  </div>
)

export default Control
