import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './page-saved-style.css';


function Saved(){

    const [animes, setAnime] = useState([]);
    
    /* The function below in useEffect is to access the localStorage
    * of browser and check if have some anime saved
    * if have some, the list will be incremented 
    * to render all animes saved or
    * will have a empty array
    */

    useEffect(() => {

        const myList = localStorage.getItem('animes'); // in the localStore the key used is "animes"
        setAnime(JSON.parse(myList) || []);

        /* In localStorage will return a string, the is used
        * JSON.parse to cast to JSON
        */

    }, []);


    /* The function deleteAnime use the filter() to return
    * all animes from the list, except the anime clicked by
    * the user
    */
    function deleteAnime(id){

        let animeFilter = animes.filter((anime) => {
            return (anime.id !== id);
        });

        setAnime(animeFilter);
        localStorage.setItem('animes', JSON.stringify(animeFilter));
    }


    /* The function below (animes.map) is used to get all animes saved
    * in the list and render it with two options "Ver Detalhes" (See Details)
    * or the button Excluir, to delete from the list
    */
    return(
        <div className="saved-animes">
            <h1>Animes Salvos</h1>
            <span id="total-saved">Total Salvo: {animes.length}</span>
            <ul>
               {animes.map((anime) => {

                   return(
                    <li key={anime.id}>
                        <span className="anime-name">{anime.nome}</span>
                        <div>
                            <Link to={`/anime/${anime.id}`}>Ver Detalhes</Link>
                            <button onClick={ () => deleteAnime(anime.id)}>Excluir</button>
                        </div>
                    </li>
                   )

                })
               }
            </ul>
        </div>
    )

}
export default Saved; 