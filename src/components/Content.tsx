import {GenreResponseProps} from '../App'
import {MovieProps} from '../App'
import {MovieCard} from './MovieCard'

interface ContentProps{
  selectedGenre:GenreResponseProps
  movies: MovieProps[]
}

export function Content(props:ContentProps) {
  const {selectedGenre, movies} = props;

  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}