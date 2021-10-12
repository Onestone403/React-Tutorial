import react from "react";
//useParams um Parameter aus suchleiste zu ziehen
import { useParams } from 'react-router-dom';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from "./BreadCrumb";
import MovieInfo from './MovieInfo'
//Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";


//Image
import NoImage from '../images/no_image.jpg'


function Movie() {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>
    return (
        <>
            <BreadCrumb MovieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </>
    )
}

export default Movie;