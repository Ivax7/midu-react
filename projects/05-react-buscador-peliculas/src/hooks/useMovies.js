import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => { // simplifica el useMemo
    if (search === previousSearch.current) return;
  
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search });
      setMovies(newMovies)
    } catch(e) {
      setError(e.message)
    } finally {
      // se ejecuta tanto en el try como en el catch
      setLoading(false)
    }
  }, [])
  


  const sortedMovies = useMemo(() => {
    return sort // si tenemos el checkbox activado
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies // si no está activado el checkbox lo dejamos igual
    }, [sort, movies]) // si no cambia el sort o las peliculas no vuelvas a hacer el cálculo. Nos ahorramos renders no deseados
    return { movies: sortedMovies, getMovies, loading }

  }