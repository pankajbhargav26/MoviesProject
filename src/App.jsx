import { useState,useEffect } from "react";
import Movies from './components/Moviesnav.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Sign from "./components/Sign";
import Home from './components/Home.jsx';
import List from './components/List.jsx';
import Popular from './components/Popular.jsx';
import New from './components/New.jsx';

function App() {

   const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetch movies from TMDb
  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return; // prevent empty search
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8566b828097d33143f990cf454f5fa9a&query=${searchTerm}`
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results || []); // TMDb uses results, not Search
  }

  // Default movies on page load
  useEffect(() => {
    fetchMovies("avengers"); // show some movies on initial load
  }, []);
  return (
    <BrowserRouter>

      <Routes>



         <Route 
  path="/"
  element={
    <>
      <Header 
        siteName="REELWISE"
        query={query}          
        setQuery={setQuery}    
       onSearch={fetchMovies} 

      />
      <Movies 
      movies={movies}
  query={query}
  setQuery={setQuery}
  onSearch={fetchMovies}/>
      <Footer />
    </>
  }
/>

        {/* Home Page */}
       <Route 
  path="/Home"
  element={
    <>
      <Header 
        siteName="REELWISE"
        query={query}          
        setQuery={setQuery}    
       onSearch={fetchMovies} 

      />
      <Movies 
      movies={movies}
  query={query}
  setQuery={setQuery}
  onSearch={fetchMovies}/>
      <Footer />
    </>
  }
/>

        {/* Sign Page */}
     
        <Route
           
          path="/sign" 
          element={
            <>
             <Header siteName="REELWISE" /> 
          <Sign />
          <Footer/>
          </>
          } 
        />
        {/* <Route 
        path ="/Home"
        element={
        <>
             <Header siteName="REELWISE" /> 
        <Movies />
        <Footer/>
        </>
        }
  /> */}
         <Route 
       
        path ="/Popular"
        element={
          <>
             <Header siteName="REELWISE" /> 
        <Popular/>
        <Footer/>
        </>
        }
        />

        <Route 
        path ="/List"
        element={
          <>
             <Header siteName="REELWISE" /> 
        <List/>
        <Footer/>
        </>
        }
        />

        <Route 
        path ="/New"
        element={
          <>
             <Header siteName="REELWISE" /> 
        <New/>
        <Footer/>
        </>
        }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App