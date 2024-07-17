import './App.css'
import { lazy } from 'react' // permite importar de forma dinámica los componentes para que no carguen todos a la vez y haya problemas de rendimiento
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import HomePage from './pages/Home.jsx'
import page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Suspense } from 'react'
// import dinámico para evitar cargar recursos innecesarios
const LazyAboutPage = lazy(()=> import('./pages/About.jsx'))


const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]


function App() {
  

  return (
    <main>
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes = {appRoutes} defaultComponent={page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={LazyAboutPage} />
      </Router>
    </Suspense>
  </main>
  )
}

export default App
