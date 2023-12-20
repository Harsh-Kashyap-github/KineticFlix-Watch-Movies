import { Link } from "react-router-dom";
import MovieCard from "../Movie-card/Movie-card.component";
import "./category-container.styles.css"

const CategoryContainer=({CategoryArray,title})=>{
    return(
        <div className="category-container">
            <h1>
                <Link className="title-link" to={`/${title.toLocaleLowerCase()}`}>
                     {title}
                </Link>
            </h1>
            <div className="cards">
            {
           CategoryArray.map((movie)=><MovieCard 
           key={movie.id}
           title={movie.original_title}
           imgUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
           movie={movie}/>)
            }

            </div>
            
        </div>
    )
}

export default CategoryContainer;