import { useContext } from "react"
import { FiltersContext } from "../context/filters"

// Custom hook para la lógica de los filtros
export function useFilters () { 

  const {filters, setFilters }= useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filterProducts, setFilters, filters }
}
