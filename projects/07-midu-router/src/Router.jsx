import { EVENTS } from "./consts"
import { useEffect, useState, Children } from "react"
import { match } from "path-to-regexp"
import { getCurrentPath } from "./utils"

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  console.log(children)
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }
    // navegación hacia adelante
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)

    // navegación hacia atrás
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)


  // iteramos el array routes para buscar el 'path' (link) que coincida con el current Path (useState)
  const Page = routesToUse.find(({ path }) => {
    if(path === currentPath) return true
    
    const matcherUrl = match(path, { decode: decodeURIComponent})
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    // /search/:query
    routeParams = matched.params // { query: 'javascript} // /search/javascript
    return true
  })?.Component
  
  return Page 
  ? <Page routeParams={routeParams}/> 
  : <DefaultComponent routeParams={routeParams}/>
}