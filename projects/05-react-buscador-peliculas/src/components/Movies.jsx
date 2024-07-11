
function ListOfMovies({ movies }) {
  return (
    // Si tenemos resultados
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>

  )
}

function NoMoviesResults() {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}


export function Movies ({ movies }) {
  // adquiere true o false
  const hasMovies = movies?.length > 0;

  return (
    hasMovies // si es true
    ? <ListOfMovies movies={movies} /> // Si NO tenemos resultados
    // si es false
    : <NoMoviesResults /> // Si NO tenemos resultados
  )
}