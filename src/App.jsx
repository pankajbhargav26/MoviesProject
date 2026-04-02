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
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Header siteName="REELWISE" />
              <Movies />
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
        <Route 
        path ="/Home"
        element={
        <>
             <Header siteName="REELWISE" /> 
        <Movies />
        <Footer/>
        </>
        }
  />
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