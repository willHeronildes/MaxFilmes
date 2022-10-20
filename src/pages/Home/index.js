import {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css'

import { Ring } from 'react-awesome-spinners';

function Home (){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
       
        async function loadFilmes(){
            const reponse = await api.get("/movie/popular",{
                params:{
                    api_key: "d77cbc7c28c090ddbb75c654c7bd22d5",
                    language: "pt-BR",
                    page: 1,
                }
           })
        //console.log(reponse)
        setFilmes(reponse.data.results.slice(0,21))
        setLoading(false);
    } 
    loadFilmes();
},[])

if(loading){
    return(
        <div className='loading'>
           <Ring/>
           <span>Carregando...</span>
        </div>
    )
}
    return(
       <div>
           <div className='lista-filmes'>
              {filmes.map((filme)=>{
                  return(
                      <article>
                          <Link to={`/filme/${filme.id}`}><img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/></Link> 
                          <Link to={`/filme/${filme.id}`}>{filme.title}</Link> 
                      </article>
                  )
              })}
           </div>
       </div>
    )
}

export default Home;