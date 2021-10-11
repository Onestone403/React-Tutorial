import react from "react";
import {useParams} from 'react-router-dom';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid';
import Spinner from './Spinner';

//Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";


//Image
import NoImage from '../images/no_image.jpg'


function Movie() {
    const {movieId} = useParams();

    const {state:movie,loading,error} = useMovieFetch(movieId);
    
    console.log(movie);
    return (
        <>
            <div>Movie</div>



        </>
    )
}

export default Movie;