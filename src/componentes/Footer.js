import { NavLink } from 'react-router-dom'
import IconRegister from 'assets/register.svg'
import IconRecipe from 'assets/recipe.svg'
import IconList from 'assets/list.svg'
import { NAME_ROUTES } from 'helps/routes'

const LINKS = [
  { to: NAME_ROUTES.Inventary, src: IconList, name: 'inventario' },
  { to: NAME_ROUTES.Recipe, src: IconRecipe, name: 'receta' },
  { to: NAME_ROUTES.Register, src: IconRegister, name: 'regitro' }
]

const Footer = () => (
  <footer className='navbar-footer'>
    <section className='navbar-footer__container'>
      {
                LINKS.map(({ to, name, src }) => (
                  <NavLink
                    key={name} to={to}
                    className={({ isActive }) =>
                      isActive ? 'active-link' : undefined}
                  >
                    <img src={src} className='icon' alt={name} />
                  </NavLink>
                ))
            }
    </section>
  </footer>
)
export default Footer
