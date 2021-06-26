import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './page-anime-style.css';

function Anime(){
    
    const { id } = useParams();
    const [animes, setAnimes] = useState([]);

    useEffect(() => {

        async function loadAnime(){
            const res = await api.get('api.js');
            console.log(res.data);
            setAnimes(res.data);

        }

        loadAnime();

    }, [id])

    

    return(
        <div>
        {animes.map((anime) => {
            
            function SaveAnime(){
    
                const myList = localStorage.getItem('animes');
            
                let savedAnimes = JSON.parse(myList) || [];
            
                const hasAnime = savedAnimes.some( (savedAnime) => savedAnime.id === anime.id);
            
                // if anime was in localStorage, it cant be add again
                if (hasAnime){
                    toast.info('Esse anime já esta salvo!');
                    return;
                }
        
                savedAnimes.push(anime)
                localStorage.setItem('animes', JSON.stringify(savedAnimes));
                toast.success('Anime salvo com sucesso!')
            
            }
            
            // if anime id is equal id of useParams show only this anime
            if (anime.id === parseInt(id)){

                

                return (   
                <div className="anime-container">
                    <img src={`https://kayronwesley.github.io/Api/` + anime.imagem} alt={anime.nome} /><br/>
                    <h1>Sinopse</h1><br/>
                    <p>{anime.sinopse}</p><br/>
                    <div className="anime-container-button">
                        <button onClick={SaveAnime}>Salvar</button>
                        <button>
                            <a href={`https://www.youtube.com/results?search_query=` + anime.nome + `Trailer`} target="blank">Assistir Trailer</a>
                        </button>
                    </div>
                </div>
                )}

            else if(animes.length < parseInt(id)){
                return(
                        window.location.replace('/')
                        /* This is just if the api use a incremental list
                        * example if i have id 1, 2, 3, 4, 5, 6 the length will be right
                        * but if a have 1, 2, 4, 5, 6, dont will work right, cuz the
                        * length is 5 and dont will show the anime with id 6
                        */                    
                )
            }
            
            else {
                return (
                 null
                )}
            })
        }
        </div>
    )
   
}

export default Anime;