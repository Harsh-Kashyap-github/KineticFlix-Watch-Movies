import { useEffect, useState } from "react";
import "./search.css"
import CategoryContainer from "../../components/category-container/category-container.component";
import { MOVIES } from "../../utils/data/movies";

const Search=()=>{
    window.scrollTo(0,0);
    const [filteredArray,setFilteredArray]=useState([])
    const[searched,setSearched]=useState("")
    const searchHandler=(event)=>{
         let value=document.getElementById("search-box").value;
         setSearched(value);
    }
    useEffect(()=>{
        setFilteredArray((MOVIES.filter((movie)=>(movie.original_title.toLocaleLowerCase()).includes(searched.toLocaleLowerCase()))));
    },[searched])
    
   
    return(
        <div className="search-container">
            <div className="search-box-container">
            <input id="search-box" type="text" placeholder="Search Movies" />
            <button className="search-button" onClick={searchHandler}>Search</button>
            </div>
            <h1>{`Search Result(s) for: ${searched}`}</h1>
            <CategoryContainer CategoryArray={filteredArray} title={""}/>
        </div>
    )
}
export default Search;