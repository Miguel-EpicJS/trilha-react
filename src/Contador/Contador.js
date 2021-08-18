// 1
// import -> esModules -> novo
// import React from 'react'

// 2
// require -> CommonJS -> velho
// const React = require('react')

// import React from 'react'
// import { useState } from 'react'
// const name = 'luiz'
// export default name // -> sem chavinha
// export name // -> com chavinha

import { useState } from "react";
import classes from "./contador.module.css";

// const minhasClasses = {
//   nomeDaClasseQueVoceUsouLaNoArquivoCSS: '...'
// }

// 1. estado -> statefull -> com estado
// 2. props -> stateless (exibicional) -> sem estado

/**
 * unidadePorClique
 * onDelete
 * index
 */
function Contador(props) {
  // props.unidadePorClique
  const [contador, setContador] = useState(0);

  const subtrair = () => {
    // setContador(contador - props.unidadePorClique);
    setContador((prevState) => prevState - props.unidadePorClique);
    console.log(contador);
  };

  const adicionar = () => {
    setContador(contador + props.unidadePorClique);
    console.log(contador);
  };

  const meuStilo = {};
  // background-color -> backgroundColor
  // border-radius -> borderRadius
  // margin -> margin
  // margin-top -> marginTop

  // ESSA É A FUNÇÃO DO COMPONENTE CONTADOR
  const onDelete = () => {
    // ESTOU CHAMANDO A FUNCAO QUE "MEU PAI" ME PASSOU
    props.onDelete(props.index);
  };

  return (
    <div>
      <h3>Contador no {props.index}</h3>
      <button onClick={subtrair} className="botao-subtrair">
        -
      </button>
      <span>{contador}</span>
      <button onClick={adicionar} className={classes.botaoAdicionar}>
        +
      </button>

      <button style={{ marginLeft: "20px" }} onClick={onDelete}>
        Del
      </button>
    </div>
  );
}

// legal colocar embaixo quando usamos PropTypes
export default Contador;

/**
 * 1. classes
 * 2. css modules
 * 3. css inline -> style="background-color: tomato;"
 * 4. styled components
 * 5. varias outras....
 */

/**
 * cases
 * 1 - camelCase -> camelCase
 * 2 - PascalCase -> PascalCase
 * 3 - snake_case (python <3)
 * 4 - kebab-case
 */
