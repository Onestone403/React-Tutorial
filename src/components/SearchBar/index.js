import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './SearchBar.styles';

function SearchBar({ setSearchTerm }) {
    const [state, setState] = useState('');
    // useRef  klassifiziert inital als reine variable die nichts re-render und direkt verändert werden kann
    const initial = useRef(true);
//Verzögerung bei User Input    
useEffect(()=>{

    //Skip erstes Rendern
    if(initial.current){
        initial.current = false;
        return;
    }

const timer = setTimeout(()=>{setSearchTerm(state);},500)
return () => clearTimeout(timer);
//Re-Render wenn sich setSearchTerm oder state ändert
},[setSearchTerm,state])

    return (

        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;