import { fireEvent } from "@testing-library/react";
import { useState, useMemo } from "react";
import Contador from "./Contador/Contador";

function App() {
  /**
   * 1. Renderizar vários contadores
   * 2. Um botão para adicionar um contador novo
   * 3. Input para armazenar a unidade por contador
   */

  // -> essa é a abordagem por array
  const [quantidadeContadores, setQuantidadeContadores] = useState(0);
  const [unidadePorClique, setUnidadePorClique] = useState(1);

  // -> implementar abordagem por numero
  // const [quantidadeContres, setQuantidadeContadores] = useState(0)

  const adicionarContador = () => {
    // .push(<Contador />) -> altera o array original
    // .concat(<Contador />) -> nao altera o array original
    // setContadores()
    setQuantidadeContadores((prevState) => prevState + 1);
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
  const removerContador = (indexDoContador) => {
    // aqui nao da pra fazer pq voce nao sabe qual contador que é ):
    // voce soh sabe quantos tem
  };

  // esse useMemo é um carinha especial que eu vou explicar depois :p
  const Contadores = useMemo(() => {
    const contadoresRender = [];

    for (let index = 0; index < quantidadeContadores; index += 1) {
      contadoresRender.push(
        <Contador
          key={index}
          unidadePorClique={unidadePorClique}
          onDelete={removerContador}
          index={index}
        />
      );
    }

    return contadoresRender;
  }, [quantidadeContadores, removerContador, unidadePorClique]);

  return (
    <div>
      <label htmlFor="unidadePorClique">Unidade</label>
      <input id="unidadePorClique" type="text" onChange={handleOnChange} />

      <button className={nomeDaClasse} onClick={adicionarContador}>
        Adicionar contador
      </button>
      {Contadores}
    </div>
  );
}

export default App;
