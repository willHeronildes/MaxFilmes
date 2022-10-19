import { Link } from 'react-router-dom';
import './header.css';

import Favorito from '../../img/favorito.png';

function Header(){
    return(
        <header className="container">
            <Link className='logo' to="/">Max Filmes</Link>
            <Link id='favoritos2' to="/favoritos"><img src={Favorito}/></Link>
            <Link className='favoritos' to="/favoritos">Filmes Favoritos</Link>
        </header>
    )
}
export default Header;