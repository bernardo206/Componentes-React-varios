import  { useState } from 'react';

function Rejuvenecedor() {
const [nombre, setNombre] = useState('');
const [edad, setEdad] = useState('');
const [nombreError, setNombreError] = useState('');
const [edadError, setEdadError] = useState('');

const handleNombreChange = (event) => {
    setNombre(event.target.value);
};

const handleEdadChange = (event) => {
    setEdad(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 1 || typeof nombre !== 'string') {
    setNombreError('El nombre debe ser una cadena con al menos un carácter.');
    } else {
    setNombreError('');
    }

    const parsedEdad = parseInt(edad);

    if (isNaN(parsedEdad) || parsedEdad <= 0 || !Number.isInteger(parsedEdad)) {
    setEdadError('La edad debe ser un número entero positivo.');
    } else {
    setEdadError('');

    const nuevaEdad = parsedEdad - 10;
    alert(`¡Hola ${nombre}! Tu nueva y feliz edad es: ${nuevaEdad}`);
    }
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        <h2>REJUVENECEDOR</h2>
        <spam>Nombre </spam>
        <input type="text" value={nombre} onChange={handleNombreChange} />
    </label>
    {nombreError && <span>{nombreError}</span>}
    <br />
    <label>
    <spam>Edad </spam>
        <input type="number" value={edad} onChange={handleEdadChange} />
    </label>
    {edadError && <span>{edadError}</span>}
    <br />
    <button type="submit">Submit</button>
    <hr/>
    </form>
);
}

export default Rejuvenecedor;



