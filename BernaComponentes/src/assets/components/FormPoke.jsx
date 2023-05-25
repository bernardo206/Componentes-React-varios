

import { useState } from "react";


function FormPoke() {

const [nombrecompleto, setNombrecompleto] = useState('');
const [edad, setEdad] = useState('');
const [pokemon, setPokemon] = useState('');


const handleNombreCompletoChange = (event) => {
    setNombrecompleto(event.target.value);
};

const handleEdadChange = (event) => {
    setEdad(event.target.value);
};

const handlePokemonChange = (event) => {
    setPokemon(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
};

    return (
<form onSubmit={handleSubmit}>

    
    <h2>POKE</h2>
    <label>
    <spam>Nombre completo </spam>
    <input type="text" placeholder="Coloca tu nombre" value={nombrecompleto} onChange={handleNombreCompletoChange}/>
    </label>
    <br />

    <label>
    <spam>Edad </spam>
    <input type="number" placeholder="Coloca tu edad" value={edad} onChange={handleEdadChange}/>
    </label>

    <br />
    <label>
    <spam>Pokemon favorito </spam>
    <input type="text" placeholder="Coloca tu pokemon favorito" value={pokemon} onChange={handlePokemonChange}/>
    </label>
    <br />
    <button type="submit">Submit</button>
    <hr/>
    
</form>
);
}

export default FormPoke;