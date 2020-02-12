import React from 'react';
import './Search.css';

export default function Search(props){
    // const
    return(
        <form className='search-form'>
            <input type='search' placeholder='Busca un pokemon' id='search-i'></input>
            <input type='submit' onClick={props.click} value='Buscar' className='btn-search'></input>
        </form>
    );
}
