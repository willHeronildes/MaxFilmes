import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api'
import './filme-info.css';

import { Ring } from 'react-awesome-spinners';

function Filmes (){
    const { id } = useParams();
    const navigation = useNavigate();
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
                navigation("/", { replace: true });
                return;
             })
         }
         loadFilmes();

         return()=>{
            console.log("COMPONENTE FOI DESMONTADO")
         }
    }, [navigation, id])

function salvarFilme(){
   //Pegando os Filmes na lista 
     const minhaLista = localStorage.getItem("@maxfilmes");

   //Verificando se a lista existe caso seja false cria uma vazia
     let filmesSalvos = JSON.parse(minhaLista) || [];
     
   //Comparando se o filme é dulicado
     const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filmes.id)

     if(hasFilme){
         alert("ESSE FILME JÁ EXISTE");
         return;
     }

     filmesSalvos.push(filmes);
     localStorage.setItem("@maxfilmes", JSON.stringify(filmesSalvos));
     alert("Filme Salvo")
}      
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
              <button onClick={salvarFilme}>Favoritar</button>
              <button>
                  <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filmes.title} Trailer do Filme`}>
                     Trailer 
                  </a>
              </button>
           </div>
       </div>
    )
}

export default Filmes;