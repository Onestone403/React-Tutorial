//Custom Hooks werden in React mit use im Filename betitelt.


import { useState,useEffect,useRef } from "react";
import API from '../API';

//helpers
import { isPersistedState } from "../helpers";

const initialState={page:0,results:[],total_pages:0, total_results:0};

export function useHomeFetch(){
    const [searchTerm,setSearchTerm] = useState('');
    const [state, setSate] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            
            setSate(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }));
        }
        catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    //Initial and Search Render
    useEffect(()=> {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');
            if (sessionState) {
                setSate(sessionState);
                return;
            }
        }
        setSate(initialState);
        fetchMovies(1, searchTerm);
    },[searchTerm]); //Wird getriggert beim initialisieren und beim ändern des wertes searchterm

    //LoadMore
    useEffect(()=>{
        if(!isLoadingMore) return;
        fetchMovies(state.page+1,searchTerm);
        setIsLoadingMore(false);
    },[isLoadingMore,searchTerm,state.page])

//Write to sessionstorage
useEffect(()=>{
if(!searchTerm){
sessionStorage.setItem('homeState',JSON.stringify(state));
}

},[searchTerm,state])


    return{state,loading,error,searchTerm, setSearchTerm,setIsLoadingMore};
}

