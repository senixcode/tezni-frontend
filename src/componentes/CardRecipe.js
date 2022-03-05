const CardRecipe = (props) => (
  <div className='card'>
    <div className='card-header'>
      <h3>{props.name}</h3>
    </div>
    <section className='card__categories'>
      {props.ingredients.map(({ ingredient, isInventary }) => <div
        key={ingredient}
        className={`card__category ${isInventary ? 'card__category-ingredient__isInventary' : 'card__category-ingredient'}`}
                                                              >{ingredient}
                                                              </div>)}
    </section>
  </div>
)

export default CardRecipe
