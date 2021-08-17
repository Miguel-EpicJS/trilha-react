import { useState } from "react";

function App() {
  /**
   * 1. Renderizar vários contadores
   * 2. Um botão para adicionar um contador novo
   * 3. Input para armazenar a unidade por contador
   */

  // -> essa é a abordagem por array
  const [contadores, setContadores] = useState([]);

  // -> implementar abordagem por numero
  // const [quantidadeContres, setQuantidadeContadores] = useState(0)

  const adicionarContador = () => {
    // .push(<Contador />) -> altera o array original
    // .concat(<Contador />) -> nao altera o array original
    // setContadores()
    setContadores((contadoresAtuais) => contadoresAtuais.concat(Contador));
  };

  /**
   * [function() {}, function(){}]
   */

  return (
    <div>
      <button onClick={adicionarContador}>Adicionar contador</button>
      {/* {contadores.map((contador) => contador)} */}
      {contadores.map((ContadorRenderizado, index) => (
        <ContadorRenderizado key={index} unidadePorClique={2} />
      ))}
    </div>
  );
}

// 1. estado -> statefull -> com estado
// 2. props -> stateless (exibicional) -> sem estado
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

  return (
    <div>
      <button onClick={subtrair}>-</button>
      <span>{contador}</span>
      <button onClick={adicionar}>+</button>
    </div>
  );
}

export default App;
