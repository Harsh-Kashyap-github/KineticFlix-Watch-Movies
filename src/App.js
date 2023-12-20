
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Home from './rotute/home/home';
import CategoryPage from './rotute/category/category';
import Search from './rotute/search/search';
import Fav from './rotute/fav/fav';
import Authentication from './rotute/authentication/authentication';
import Player from './rotute/player/player';



function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index={true} element={<Home/>}/>
        <Route path=":category" element={<CategoryPage/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="favourites" element={<Fav/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="movie/:id" element={<Player/>}/>
      </Route>
    </Routes>
  );
}

export default App;
