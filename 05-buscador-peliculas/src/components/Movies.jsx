import withoutResults from '../mocks/no-results.json'

export function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMoviesResults() {
  return (
    <p>{withoutResults.Error}</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />
  )
}