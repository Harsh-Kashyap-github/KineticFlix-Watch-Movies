import { useParams } from "react-router-dom";
import "./category.css"
import { ALL } from "../../utils/data/all";
import CategoryContainer from "../../components/category-container/category-container.component";

const CategoryPage=()=>{
    window.scrollTo(0,0);
    const {category}=useParams()
    return(
        <div className="category-container">
            {
                <CategoryContainer CategoryArray={ALL[category]} title={category.toLocaleUpperCase()}/>
            }
        </div>
    )
}
export default CategoryPage;