import Poster from "../../components/Poster/poster.component";
import CategoryContainer from "../../components/category-container/category-container.component";
import { ALL } from "../../utils/data/all";
import "./home.css"
import {getRandomObjectsFromArray} from "../../utils/randomObjectFilter"

const Home=()=>{
    return(
        <div className="home-container">
            <Poster imgUrl="../../assets/photo/poster.png"/>
           {
            Object.keys(ALL).map((category)=>{
                return <CategoryContainer key={category} CategoryArray={getRandomObjectsFromArray( ALL[category],5)} title={category.toLocaleUpperCase()}/>
             } )
           }
        </div>
    )
}

export default Home;