import React from 'react'
import MovieControls from './MovieControls'
import { Link } from 'react-router-dom'

function MovieCard({movie, type}) {
        return (
            <Link to={`/watchlist/preview/${movie.title}`}>
                <div className="movie-card">
                    <div className="overlay"></div>

                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />
                    ) : (
                        <div className="filler-poster"></div>
                    )
                    }

                    <MovieControls type={type} movie={movie} />

                </div>
            </Link>
            
        )
}

export default MovieCard