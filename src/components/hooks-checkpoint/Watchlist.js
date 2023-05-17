import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import MoviePreview from './MoviePreview';
import { Outlet } from 'react-router-dom';


function Watchlist() {
  return (
    <div className='watchlist'>
      <MovieList ></MovieList>
      <Outlet></Outlet>
    </div>

  )
}

export default Watchlist