import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import './Moviesnav.css'
export default function Movies(){
    return(
    <div >
    <h1 className="h1">movies hii</h1>
    <div className="search">
        <input type="text" placeholder="Search Movies" value='' onChange='' className="Searchinput" />
    <button onClick="" className="SearchButton"> <AiOutlineSearch /></button>
   
    </div>
    </div>
    );
}