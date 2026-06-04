import { useState } from "react";

function Square({ valor, func }) {
  return (
    <button className="square" onClick={func}>
      {valor}
    </button>
  );
}

export default function Campo() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [estado, setEstado] = useState(false);
  const [status, setStatus] = useState(null);

  function reiniciarJogo() {
    setQuadrados(Array(9).fill(null));
    setEstado(false);
    setStatus(null);
  }

  function mostrarJogador() {
    if (estado == false) {
      return "Vez do jogador X";
    } else {
      return "Vez do jogador O";
    }
  }

  function calcularVencedor(tabuleiro) {
    /* Jogador 1 */
    if (
      /*Linha*/
      (tabuleiro[0] == "X" && tabuleiro[1] == "X" && tabuleiro[2] == "X") ||
      (tabuleiro[3] == "X" && tabuleiro[4] == "X" && tabuleiro[5] == "X") ||
      (tabuleiro[6] == "X" && tabuleiro[7] == "X" && tabuleiro[8] == "X") ||
      /*Coluna*/
      (tabuleiro[0] == "X" && tabuleiro[3] == "X" && tabuleiro[6] == "X") ||
      (tabuleiro[1] == "X" && tabuleiro[4] == "X" && tabuleiro[7] == "X") ||
      (tabuleiro[2] == "X" && tabuleiro[5] == "X" && tabuleiro[8] == "X") ||
      /*Diagonal*/
      (tabuleiro[0] == "X" && tabuleiro[4] == "X" && tabuleiro[8] == "X") ||
      (tabuleiro[2] == "X" && tabuleiro[4] == "X" && tabuleiro[6] == "X")
    ) {
      console.log("Jogador 1 Venceu!");
      return "Jogador 1 venceu!";
    } 
    /* Jogador 2 */
    else if (
      /*Linha*/
      (tabuleiro[0] == "O" && tabuleiro[1] == "O" && tabuleiro[2] == "O") ||
      (tabuleiro[3] == "O" && tabuleiro[4] == "O" && tabuleiro[5] == "O") ||
      (tabuleiro[6] == "O" && tabuleiro[7] == "O" && tabuleiro[8] == "O") ||
      /*Coluna*/
      (tabuleiro[0] == "O" && tabuleiro[3] == "O" && tabuleiro[6] == "O") ||
      (tabuleiro[1] == "O" && tabuleiro[4] == "O" && tabuleiro[7] == "O") ||
      (tabuleiro[2] == "O" && tabuleiro[5] == "O" && tabuleiro[8] == "O") ||
      /*Diagonal*/    
      (tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O") ||
      (tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O") 
    ) {
      console.log("Jogador 2 Venceu!");
      return "Jogador 2 venceu!";
    } else if (
      tabuleiro[0] != null &&
      tabuleiro[1] != null &&
      tabuleiro[2] != null &&
      tabuleiro[3] != null &&
      tabuleiro[4] != null &&
      tabuleiro[5] != null &&
      tabuleiro[6] != null &&
      tabuleiro[7] != null &&
      tabuleiro[8] != null
    ) {
      console.log("Deu empate!");
      return "Deu empate!";
    }
    return null;
  }

  function handleClick(i) {
    const quadradoTemp = quadrados.slice();
    if (quadradoTemp[i] != null) {
      return;
    }

    if (estado == false) {
      quadradoTemp[i] = "X";
    } else {
      quadradoTemp[i] = "O";
    }
    setQuadrados(quadradoTemp);
    setEstado(!estado);

    setStatus(calcularVencedor(quadradoTemp));
  }
  return (
    <>
      <div class="board-row">
        <Square valor={quadrados[0]} func={() => handleClick(0)} />
        <Square valor={quadrados[1]} func={() => handleClick(1)} />
        <Square valor={quadrados[2]} func={() => handleClick(2)} />
      </div>
      <div class="board-row">
        <Square valor={quadrados[3]} func={() => handleClick(3)} />
        <Square valor={quadrados[4]} func={() => handleClick(4)} />
        <Square valor={quadrados[5]} func={() => handleClick(5)} />
      </div>
      <div class="board-row">
        <Square valor={quadrados[6]} func={() => handleClick(6)} />
        <Square valor={quadrados[7]} func={() => handleClick(7)} />
        <Square valor={quadrados[8]} func={() => handleClick(8)} />
      </div>
      <div>
        <h2>{mostrarJogador()}</h2>
      </div>
      <div>
        <h1>{status}</h1>
      </div>
      <div>
        <button onClick={reiniciarJogo}>Reiniciar</button>
      </div>
    </>
  );
}
