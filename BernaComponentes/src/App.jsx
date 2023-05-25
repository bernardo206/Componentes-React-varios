
import './App.css'
import Categorias from './assets/components/Categorias'
import TituloPrincipal from './assets/components/TituloPrincipal'
import Promocion from './assets/components/Promocion'
import ListaMarcasAutos from './assets/components/ListaMarcasAutos'
import miImagen from './assets/mi-imagen.jpg'
import Counter from './assets/components/Counter'
import LoginForm from './assets/components/LoginForm'
import Rejuvenecedor from './assets/components/Rejuvenecedor'
import FormPoke from './assets/components/FormPoke'

function App() {

  
  return (
    <>
        <TituloPrincipal/>
        <img src={miImagen} alt="Mi Imagen" />
        <LoginForm/>
        <Categorias/>
        <ListaMarcasAutos/>
        <Promocion
            nombre="Renault Clio Mio"
            modelo="2015"
            precio="2700000"
        />
          
          <Promocion
            nombre="Peugeot 208"
            modelo="2014"
            precio="2800000"
        />
              <Promocion
            nombre="Land Rover Defender"
            modelo="1999"
            precio="8700000"
            />
            <Counter/>
            <Rejuvenecedor/>
            <FormPoke/>
            
        {/* FROMA DE COMENTAR*/}
    </>
  )
}

export default App 
