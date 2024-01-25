import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  // const nome = 'Guilherme';

  // function retornaNome() {
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "maria"
  // }

  // let estaDeDia = false

  return(
    <>
    <Perfil nome="Guilherme" endereco="https://github.com/GuilhermeSantosz.png"/>
    
    {formularioEstaVisivel && (
      <Formulario/>
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toogle form</button>
    </>

  )

}

export default App;
