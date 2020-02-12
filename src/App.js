import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';


function App() {


  const [estado,setEstado] = useState(null);



  const consultar= async (pokemon)=>{
    try{
      const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const p = await response.json()
      const nombre= await p.name
      const idd=await p.id
      const abilities= await p.abilities.map(elemento=>elemento.ability.name)
      const types= await p.types.map(elemento=>elemento.type.name)
      const height= await p.height
      const weight= await p.weight
      const stats = await p.stats.map(stat => stat.base_stat)
      //rapidez,defensa especial,ataque especial,defensa, ataque,hp
      setEstado([nombre,idd,abilities,types,height,weight,    stats])

    } catch(error){
      console.log(error.message)
      setEstado(false)

  }
  }

  const buscar=(e)=>{
    e.preventDefault();
    setEstado('loading');
    const search_input=document.getElementById('search-i');
    consultar(search_input.value.toLowerCase());
    const carta=document.getElementById('card');
  }



  return (
    <div className="App">
      <div className='app-container'>
        <header className="App-header">
          <Search click={buscar}/>
        </header>
      <div className='results-container'>
        <Results state={estado}/>
      </div>
      </div>
    </div>
  );
}

export default App;
