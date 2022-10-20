import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Filme from './pages/Filmes';
import Erro from  './pages/Erro';

import Header from "./components/Header/header";


function RoutesApp (){
    return(
       <BrowserRouter>
         <Header/>
         <Routes>
             <Route path='/' element={ <Home/> }/>
             <Route path='/filme/:id' element={ <Filme/> }/>


             <Route path='*' element={ <Erro/> }/>
         </Routes>
       </BrowserRouter>
    )
}

export default RoutesApp;

