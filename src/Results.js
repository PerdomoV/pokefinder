import React from 'react';
import './Results.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Results(props){

  if (props.state==='loading'){

    return(<div className='Card'> <p>Cargando...</p> </div>)
  }

  if (props.state){
    const statistics=props.state[6].map(stat=>stat)
    return(
      <div className='Card' id='card'>
              <img className='poke-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.state[1]}.png`}/>
              <ul className='basicos'>
                <li className='nombre'><b>Nombre:</b> {props.state[0]}</li>
                <li className='altura'><b> Altura:</b> {props.state[4]} dm</li>
                <li className='peso'><b>Peso: </b> {props.state[5]} hg</li>
              </ul>
              <div className='habilidades'><b>Habilidades: </b><ul>{props.state[2].map(habilidad=><li>{habilidad}</li>)}</ul></div>
            <ul className='estadisticas'>
              <p><b>Estadisticas:</b></p>
              <li><b>Rapidez: </b> {statistics[0]}</li>
              <li><b>Defensa especial: </b> {statistics[1]}</li>
              <li><b>Ataque especial: </b> {statistics[2]}</li>
              <li><b>Defensa: </b> {statistics[3]}</li>
              <li><b>Ataque: </b>{statistics[4]}</li>
              <li><b>Hp: </b> {statistics[5]}</li>
            </ul>
            <p>Data extraida de:</p><a href='https://pokeapi.co' target="_blank"> Poke API </a>
      </div>

      )}


  if(props.state===false){
    return(
      <div className='Card'>
        <p>Pokemon no encontrado, ingresa un nombre valido</p>
      </div>
    )}
  if (props.state===null) {
    return(<div className='Card'>  </div>)
  }



}
