import CardRecipe from 'componentes/CardRecipe'
import Control from 'componentes/Control'
import { RECIPES } from 'mocks/recipes.mock'

const Recipe = () => (
  <div className='container'>
    <h1 className='title'>Recetas</h1>
    <Control name='Buscar'>
      <input type='text' />
    </Control>
    <button className='btn'>
      Nuevo
    </button>
    <section className='container-card'>
      {RECIPES.map(({ name, ingredients, prepared }) => <CardRecipe
        key={name}
        name={name}
        ingredients={ingredients}
        prepared={prepared}
                                                        />
      )}
    </section>
  </div>
)

export default Recipe
