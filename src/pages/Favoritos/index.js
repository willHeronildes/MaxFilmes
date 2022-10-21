
import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

       const minhaLista = localStorage.getItem("@maxfilmes");
       setFilmes(JSON.parse(minhaLista)|| [])

    }, [])
    return(
        <div className='meus-filmes'>
           <h1>Meus Filmes</h1>
           <ul>
               {filmes.map((filme)=>{
                   return(
                       <li key={filme.id}>
                          <div>
                             <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                          </div>
                          <span>{filme.title}</span>
                          <div>
                             <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                             <button>Excluir</button> 
                          </div>
                       </li>
                   )
               })}
           </ul>
        </div>
    )
}

export default Favoritos;