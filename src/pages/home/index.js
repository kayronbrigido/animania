import './home-style.css';
import { useEffect, useState, } from "react";
import api from '../../services/api';

export default function Home() {

    const [animes, setAnimes] = useState([]);
    
    useEffect(() => {

        async function loadAnime(){
            
            const res = await api.get('api.js');
            console.log(res.data)
            setAnimes(res.data);

        }

        loadAnime();
    }, [])

    /* Will render all animes in cards with name, image and one button
    * the button should redirect the user to the anime details
    */
    return(
        <div className="container">
            <div className="anime-list">
                {animes.map((anime) => {
                    return(
                        <div key={anime.id} className="anime-card">
                            <div className="anime-card-title">{anime.nome}</div>
                            <div className="anime-card-image"><img src={`https://kayronwesley.github.io/Api/` + anime.imagem} alt={anime.nome}/></div>
                            <div className="anime-card-button">
                                <button>
                                    <a href={`/anime/${anime.id}`}>Ver</a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}