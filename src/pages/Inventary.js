import CardInventary from 'componentes/CardInventary'
import Control from 'componentes/Control'
import { CATEGORIES } from 'mocks/categories.mock'
import { INVENTARIES } from 'mocks/inventaries.mock'

const Inventary = () => (
  <div className='container'>
    <h1 className='title'>Inventario</h1>
    <Control name='Buscar'>
      <input type='text' />
    </Control>
    <section className='card__categories'>
      {Object.values(CATEGORIES).map((category) =>
        <div
          key={category}
          className='card__category'
        >
          {category}
        </div>)}
    </section>
    <section className='container-card'>
      {INVENTARIES.map(({ name, categories, isInventary }, index) =>
        <CardInventary
          key={index}
          name={name}
          isInventary={isInventary}
          categories={categories}
        />
      )}
    </section>
  </div>
)

export default Inventary
