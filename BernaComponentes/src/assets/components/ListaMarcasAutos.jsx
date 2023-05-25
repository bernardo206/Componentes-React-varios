import './ListaMarcasAutos.css'

const ListaMarcasAutos = () => {
  const marcasAutos = [{nombre:'Toyota', enlace:'https://www.toyota.com'} , { nombre: 'Honda', enlace: 'https://www.honda.com' }, { nombre: 'Ford', enlace: 'https://www.ford.com' }, { nombre: 'Chevrolet', enlace: 'https://www.chevrolet.com' }, { nombre: 'Volkswagen', enlace: 'https://www.vw.com' },{nombre:"Fiat", enlace:"https://www.fiat.com.ar"},{nombre:"Land Rover", enlace:"https://www.fiat.com.ar"}, {nombre:"Renault",enlace:"https://www.renault.com.ar"},{nombre: "Peugeot",enlace:"https://www.peugeot.com.ar"}];

  return (
    <div className='ListaMarcasAutos'>
      <h2>Marcas de Autos</h2>
      <ul>
        {marcasAutos.map((marca, index) => (
          <li key={index}>
            <a href={marca.enlace}>{marca.nombre}</a>
            </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default ListaMarcasAutos;