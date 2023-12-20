import { useContext } from "react";
import CategoryContainer from "../../components/category-container/category-container.component";
import "./fav.css"
import { FavContext } from "../../context/fav-movies/fav-movies.context";
const Fav=()=>{
    const {favs}=useContext(FavContext)
    return(
        <div className="fav-container">
         <CategoryContainer CategoryArray={favs} title={"FAVOURITES"}/>
        </div>
    )
}
export default Fav;