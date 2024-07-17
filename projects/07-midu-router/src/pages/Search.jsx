import { useEffect } from "react"
import { Link } from "../Link"
export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])
  return ( 
    <>
      <h1>Has buscado {routeParams.query}</h1>
      <Link to='/'>Ir a la home</Link>
    </>
  )
} 