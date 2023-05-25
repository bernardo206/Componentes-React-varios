/* eslint-disable react/prop-types */




const Promocion = ({nombre,modelo,precio}) => {

  return (
  <>
        <div>
        <h3> {nombre}</h3>
        <p>Modelo {modelo}</p>
        <p>Precio $ {precio}</p>
        <button >Examinar</button>
          <hr/>
          </div>
  </>
)
}

export default Promocion;