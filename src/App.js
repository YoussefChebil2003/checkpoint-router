import {React} from "react";
import { Routes, Route, BrowserRouter, Link, useParams, Outlet } from "react-router-dom";
import MainHeader from "./components/hooks-checkpoint/MainHeader";
import Watchlist from "./components/hooks-checkpoint/Watchlist";
import Add from "./components/hooks-checkpoint/Add";
import Watched from "./components/hooks-checkpoint/Watched";
import { GlobalProvider} from "./context/GlobalState";
import "./lib/css/all.min.css";
import './App.css'
import MoviePreview from "./components/hooks-checkpoint/MoviePreview";


/* App component */
const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path='/' element={
            <div style={{marginTop: "250px", display: "flex",justifyContent:"center"}}>
              <h1>Welcome to the React Router Checkpoint</h1>
            </div>
          }/>
          <Route path="/watchlist" element={<Watchlist />}>
            <Route path="preview/:movieTitle" element={<MoviePreview/>}/>
          </Route>
          <Route path="/add" element={<Add/>}>

          </Route>
          <Route path="/watched" element={<Watched/>}>

          </Route> 
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};


export default App;