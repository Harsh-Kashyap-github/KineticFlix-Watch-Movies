import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faHeart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./nav-bar.styles.css";
import { CreateFavsFromAuth, SignOutUser, UpdateFavsAtServer, getDisplayName, signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { FavContext } from "../../context/fav-movies/fav-movies.context";
import { UserContext } from "../../context/user/user.context";
import UserNavItem from "../user-nav-item/user-nav.item.component";


const NavBar = () => {
  const {favs,setFavs}=useContext(FavContext)
  const {currentUser}=useContext(UserContext)
  const [displayName,setdisplayName]=useState("Unknown")
  const [photo,setPhoto]=useState("../../assets/photo/auth.jpeg")
const getFavsFromServer=async ()=>{
    let favsAtserver=await CreateFavsFromAuth(currentUser,favs)
    if(favsAtserver)
    {
      setFavs(favsAtserver);
    }
}

const favsDataUploadToServer=async()=>{
  if(currentUser)
  {
    await UpdateFavsAtServer(favs,currentUser)
  }
}

useEffect(()=>{
  getFavsFromServer()
  if(!currentUser){
    setFavs([])
  }
},[currentUser]);
useEffect(()=>{favsDataUploadToServer();},[favs])



const displayNameFromServer=async(currentUser)=>{
  if(currentUser)
  {
    setdisplayName((await getDisplayName(currentUser))[0]);
    setPhoto((await getDisplayName(currentUser))[1])
  }
}

useEffect(()=>{
  displayNameFromServer(currentUser)
},[currentUser])

  return (
    <Fragment>
      <div className="nav-bar-container">
        <div className="logo">
          <Link to="/">
          KineticFlix
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          </Link>
        </div>
        <div className="nav-links">
          <span>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </span>
          <span>
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} /> Search
            </Link>
          </span>
          <span>
            <Link to="/favourites">
              <FontAwesomeIcon icon={faHeart} /> Favorites
            </Link>
          </span>
        </div>
        <div className="auth">
          {
          (currentUser)?(<UserNavItem displayName={displayName} photoURL={photo}/>):
          (<Link to="/auth">
            <FontAwesomeIcon icon={faSignInAlt} /> SignIn
          </Link>)
}
        </div>
      </div>
      <Outlet />
      <div className="footer">Copyright © 2023 KineticFlix. All rights reserved.</div>
    </Fragment>
  );
};

export default NavBar;
