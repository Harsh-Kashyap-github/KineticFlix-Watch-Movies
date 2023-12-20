import { useParams } from "react-router-dom";
import Heart from "../../components/heart/heart.component";
import Star from "../../components/star/star.component";
import "./player.css"
import { MOVIES } from "../../utils/data/movies";
import CategoryContainer from "../../components/category-container/category-container.component";
import {getRandomObjectsFromArray} from "../../utils/randomObjectFilter";


const Player=()=>{
    window.scrollTo(0,0);
    const {id}=useParams();
    let movie={}

    MOVIES.filter((Movie)=>{
        if(Movie.id==id)
    {
        movie=Movie;
    }
    return null;})
    console.log(movie);
    let videoLinks=[
        "https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-3a955.appspot.com/o/Marvel%20Studios%E2%80%99%20Guardians%20of%20the%20Galaxy%20Vol.%203%20_%20Official%20Trailer.mp4?alt=media&token=fcd72926-6e90-4ae1-9231-71238cc09864",
        "https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-3a955.appspot.com/o/Recording%202023-12-18%20202352.mp4?alt=media&token=7e5cdd02-2c1e-46ee-a67e-be3775b88c96"
    ]

    return(
        <div className="player-container">
            <h2 className="movie-title">{movie.title}</h2>
            <Heart movie={movie}/>
            <video  className="video-player" src={videoLinks[0]} controls/>
            <div className="info-box">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" className="cover" />
                <div className="detail-box">
                    <span id="player-title">Title:{movie.title}</span>
                    <span id="r-date">Release Date:{movie.release_date}</span>
                    <span id="lang">Language:{movie.original_language}</span>
                    <Star voteAverage={movie.vote_average} voteCount={movie.vote_count}/>
                    <span id="overview">Overview:{movie.overview}</span>
                </div>
            </div>
            <CategoryContainer title={"EXPLORE MORE"} CategoryArray={getRandomObjectsFromArray(MOVIES,10)}/>
        </div>
    )
}

export default Player;