
import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

       const minhaLista = localStorage.getItem("@maxfilmes");
       setFilmes(JSON.parse(minhaLista)|| [])

    }, [])

    function excluirfilme(id){
       let filtroFilmes = filmes.filter((filme)=>{
           return(filme.id !== id)
       } )
       setFilmes(filtroFilmes);
       localStorage.setItem("@maxfilmes", JSON.stringify(filtroFilmes)) 
       toast.success('Filme Excluido'); 
    }

    return(
        <div>
            <div className='meus-filmes'>
                {filmes.length === 0 && <span className='span'>Você Não Possui nem um Filme Salvo</span>}
               {filmes.map((filme)=>{
                   return(
                       <article>
                           <Link to={`/filme/${filme.id}`}><img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/></Link>
                           <p className='del' onClick={()=> excluirfilme(filme.id)}>Excluir</p> 
                       </article>
                   )
               })}
            </div>
        </div>
     )
 }

export default Favoritos;