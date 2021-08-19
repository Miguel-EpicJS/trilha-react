import { useState } from "react";
import Contador from "./Contador/Contador";

function App() {
  /**
   * 1. Renderizar vários contadores
   * 2. Um botão para adicionar um contador novo
   * 3. Input para armazenar a unidade por contador
   */

  // -> essa é a abordagem por array
  const [contadores, setContadores] = useState([]);
  // fazer uma lista de identificadores
  // [131231221421312312, 387263187631287362, 329863127836232]
  const [unidadePorClique, setUnidadePorClique] = useState(1);

  // -> implementar abordagem por numero
  // const [quantidadeContres, setQuantidadeContadores] = useState(0)

  const adicionarContador = () => {
    // .push(<Contador />) -> altera o array original
    // .concat(<Contador />) -> nao altera o array original
    // setContadores()
    setContadores((contadoresAtuais) =>
      contadoresAtuais.concat(new Date().getTime())
    );
  };

  /**
   * [function() {}, function(){}]
   */

  const nomeDaClasse = "button";

  // addEventListener('onChange', function(event) { event.target.value })
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    // Number(), parseInt(), +event.target.value
    setUnidadePorClique(Number(event.target.value));
  };

  // ESSA EH A FUNCAO QUE VOU PASSAR PARA O CONTADOR
  const removerContador = (idContador) => {
    console.log(`opa, bora remover esse contador ${idContador}`);

    // recebe o estado
    // retorna o novo

    setContadores((contadores) => {
      return contadores.filter((id) => id !== idContador);
    });
  };

  return (
    <div>
      <label htmlFor="unidadePorClique">Unidade</label>
      <input id="unidadePorClique" type="text" onChange={handleOnChange} />

      <button className={nomeDaClasse} onClick={adicionarContador}>
        Adicionar contador
      </button>
      {/* {contadores.map((contador) => contador)} */}
      {contadores.map((id) => (
        <Contador
          key={id}
          unidadePorClique={unidadePorClique}
          onDelete={removerContador}
          index={id}
        />
      ))}
    </div>
  );
}

export default App;
