import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";



function MoviePreview() {
    const {watchlist} = useContext(GlobalContext);
    const params = useParams();
    const movie = watchlist.find((movie) => movie.title == params.movieTitle)


    return (
        //fetch the movie corresponding to params.movieTitle
        
            watchlist.length > 0 ? (
                <div className='movie-preview'>
                    <h1>{movie.title}</h1>
                    {movie.poster_path ? (
                    <img className="preview-poster"
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                    ) : (
                        <div className="filler-poster"></div>
                    )
                    }
                    <h4>{movie.release_date}</h4>
                    {movie.overview ?(
                        <p>{movie.overview}</p>
                    ):(
                        <p>Lorem ipsum</p>
                    ) }
                </div>
                )
                : (
                    <h2 className="no-movies">No movies in your list! Add some!</h2>
                )
    );
}


export default MoviePreview;