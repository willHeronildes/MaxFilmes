import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api'
import './filme-info.css';

import { Ring } from 'react-awesome-spinners';

function Filmes (){
    const { id } = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
         async function loadFilmes(){
             await api.get(`/movie/${id}`,{
                params:{
                    api_key: "d77cbc7c28c090ddbb75c654c7bd22d5",
                    language: "pt-BR",
                }
             })

             .then((response)=>{
                setFilmes(response.data);
                setLoading(false);
             })
             .catch(()=>{

             })
         }
         loadFilmes();

         return()=>{

         }
    }, [])
if(loading){
    return(
        <div className='loading'>
            <Ring/>
            <span>Carregando...</span>
        </div>
        )
    }    
    return(
       <div className='filme-info'>
           <h1>{filmes.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title} />

           <h3>Sinopse</h3>
           <span>{filmes.overview}</span>
           <strong>Avaliação: {filmes.vote_average} / 10</strong>

           <div className='area-buttons'>
              <button>Favoritar</button>
              <button>
                  <a href='#'>
                     Trailer 
                  </a>
              </button>
           </div>
       </div>
    )
}

export default Filmes;