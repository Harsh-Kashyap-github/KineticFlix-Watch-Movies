import { useNavigate } from "react-router-dom";
import Heart from "../heart/heart.component";
import "./Movie-card.styles.css"
const MovieCard=({title,imgUrl,movie})=>{
    const nav=useNavigate();
    return(
        <div className="card-container">
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <div className="button-container">
            <button onClick={()=>nav(`/movie/${movie.id}`)} className="watch-button">Watch Now</button>
            <Heart movie={movie}/>
            </div>
           
        </div>
    )
}

export default MovieCard;