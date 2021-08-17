import { useState } from "react";

const frutas = [
  "pessego",
  "tomate",
  "banana",
  "abacate",
  "pera",
  "maçã",
  "pera",
];

function App() {
  return (
    <div>
      {/* <Contador unidadePorClique={3} /> */}

      <ol>
        {/* {[<li>pessego</li>, <li>tomate</li>, <li>banana</li>, <li>abacate</li>]} */}
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ol>
    </div>
  );
}

// 1. estado -> statefull -> com estado
// 2. props -> stateless (exibicional) -> sem estado
function Contador(props) {
  // props.unidadePorClique
  const [contador, setContador] = useState(0);

  const subtrair = () => {
    setContador(contador - props.unidadePorClique);
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
