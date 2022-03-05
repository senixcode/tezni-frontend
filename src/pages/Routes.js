
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from 'pages/Register'
import Recipe from 'pages/Recipe'
import Inventary from 'pages/Inventary'
import Footer from 'componentes/Footer'
import { NAME_ROUTES } from 'helps/routes'

const RoutesList = () => (
  <BrowserRouter>
    <Routes>
      <Route path={NAME_ROUTES.Inventary} element={<Inventary />} />
      <Route path={NAME_ROUTES.Register} element={<Register />} />
      <Route path={NAME_ROUTES.Recipe} element={<Recipe />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default RoutesList
