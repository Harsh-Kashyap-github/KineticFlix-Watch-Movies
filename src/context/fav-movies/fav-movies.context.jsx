const { createContext, useState } = require("react");
const addToFavs=(movieToAdd,favs)=>
{
    let isPresent=false
   favs.map((movie)=>{
         if(movie.id===movieToAdd.id)
         {
            isPresent=true;
         }
         return null;

   })
   return (isPresent)? favs :[...favs,movieToAdd]
}

const removeFromFavs=(movieToRemove,favs)=>
{
    
  return favs.filter((movie)=>(movie.id!==movieToRemove.id))
        
   
}
export const FavContext=createContext({
    favs:[],
    setFavs:()=>[]
})

export const FavProvider=({children})=>{
   const [favs,setFavs]=useState([])
   const add=(movie)=> setFavs(addToFavs(movie,favs))
   const remove=(movie)=> setFavs(removeFromFavs(movie,favs))

    const value={favs,setFavs,add,remove}
    return <FavContext.Provider value={value}>{children}</FavContext.Provider>
}
