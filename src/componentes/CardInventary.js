import IconCheck from 'assets/check.svg'
import IconClose from 'assets/close.svg'

const CardInventary = ({ name, categories, isInventary }) => (
  <div className='card'>
    <div className='card-header'>
      <h3>{name}</h3>
      <div>
        {isInventary
          ? <img src={IconCheck} className='icon-inventory' alt='icono check' />
          : <img src={IconClose} className='icon-inventory' alt='icono close' />}
      </div>
    </div>
    <section className='card__categories'>
      {categories.map((category) => <div key={category} className='card__category'>{category}</div>)}
    </section>
  </div>
)

export default CardInventary
