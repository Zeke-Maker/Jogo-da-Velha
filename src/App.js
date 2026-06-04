import { useState } from "react";

function Square({ valor, func, vencedor }) {
  return (
    <button className={`square ${vencedor ? "vencedor" : ""}`}
      onClick={func}>
      {valor}
    </button>
  );
}

export default function Campo() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [estado, setEstado] = useState(false);
  const [status, setStatus] = useState(null);
  const [CasasVencedoras, setCasasVencedoras] = useState([]);

  function reiniciarJogo() {
    setQuadrados(Array(9).fill(null));
    setEstado(false);
    setStatus(null);
    setCasasVencedoras([]);
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
      /*Linhas*/
      (tabuleiro[0] == "X" && tabuleiro[1] == "X" && tabuleiro[2] == "X")
    ) {
      setCasasVencedoras([0, 1, 2]);
      return "Jogador 1 venceu!";
    } else if (
      (tabuleiro[3] == "X" && tabuleiro[4] == "X" && tabuleiro[5] == "X")
    ) {
      setCasasVencedoras([3, 4, 5]);
      return "Jogador 1 venceu!";
    } else if (
      (tabuleiro[6] == "X" && tabuleiro[7] == "X" && tabuleiro[8] == "X")
    ) {
      setCasasVencedoras([6, 7, 8]);
      return "Jogador 1 venceu!";
    } /*Coluna*/ else if (
      (tabuleiro[0] == "X" && tabuleiro[3] == "X" && tabuleiro[6] == "X")
    ) {
      setCasasVencedoras([0, 3, 6]);
      return "Jogador 1 venceu!";
    } else if (
      (tabuleiro[1] == "X" && tabuleiro[4] == "X" && tabuleiro[7] == "X")
    ) {
      setCasasVencedoras([1, 4, 7]);
      return "Jogador 1 venceu!";
    } else if (
      (tabuleiro[2] == "X" && tabuleiro[5] == "X" && tabuleiro[8] == "X")
    ) {
      setCasasVencedoras([2, 5, 8]);
      return "Jogador 1 venceu!";
    } /*Diagonal*/ else if (
      (tabuleiro[0] == "X" && tabuleiro[4] == "X" && tabuleiro[8] == "X")
    ) {
      setCasasVencedoras([0, 4, 8]);
      return "Jogador 1 venceu!";
    } else if (
      (tabuleiro[2] == "X" && tabuleiro[4] == "X" && tabuleiro[6] == "X")
    ) {
      setCasasVencedoras([2, 4, 6]);
      return "Jogador 1 venceu!";
    }

    /* Jogador 2 */
    else if (
      /*Linha*/
      (tabuleiro[0] == "O" && tabuleiro[1] == "O" && tabuleiro[2] == "O")
    ) {
      setCasasVencedoras([0, 1, 2]);
      return "Jogador 2 venceu!";
    } else if (
      (tabuleiro[3] == "O" && tabuleiro[4] == "O" && tabuleiro[5] == "O")
    ) {
      setCasasVencedoras([3, 4, 5]);
      return "Jogador 2 venceu!";
    } else if (
      (tabuleiro[6] == "O" && tabuleiro[7] == "O" && tabuleiro[8] == "O")
    ) {
      setCasasVencedoras([6, 7, 8]);
      return "Jogador 2 venceu!";
    }/*Coluna*/ else if (
      (tabuleiro[0] == "O" && tabuleiro[3] == "O" && tabuleiro[6] == "O")
    ) {
      setCasasVencedoras([0, 3, 6]);
      return "Jogador 2 venceu!";
    } else if (
      (tabuleiro[1] == "O" && tabuleiro[4] == "O" && tabuleiro[7] == "O")
    ) {
      setCasasVencedoras([1, 4, 7]);
      return "Jogador 2 venceu!";
    } else if (
      (tabuleiro[2] == "O" && tabuleiro[5] == "O" && tabuleiro[8] == "O")
    ) {
      setCasasVencedoras([2, 5, 8]);
      return "Jogador 2 venceu!";
    }/*Diagonal*/ else if (
      (tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O")
    ) {
      setCasasVencedoras([0, 4, 8]);
      return "Jogador 2 venceu!";
    } else if (
      (tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O")
    ) {
      setCasasVencedoras([2, 4, 6]);
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
      <div className="board-row">
        <Square valor={quadrados[0]} func={() => handleClick(0)} vencedor={CasasVencedoras.includes(0)} />
        <Square valor={quadrados[1]} func={() => handleClick(1)} vencedor={CasasVencedoras.includes(1)} />
        <Square valor={quadrados[2]} func={() => handleClick(2)} vencedor={CasasVencedoras.includes(2)} />
      </div>
      <div className="board-row">
        <Square valor={quadrados[3]} func={() => handleClick(3)} vencedor={CasasVencedoras.includes(3)} />
        <Square valor={quadrados[4]} func={() => handleClick(4)} vencedor={CasasVencedoras.includes(4)} />
        <Square valor={quadrados[5]} func={() => handleClick(5)} vencedor={CasasVencedoras.includes(5)} />
      </div>
      <div className="board-row">
        <Square valor={quadrados[6]} func={() => handleClick(6)} vencedor={CasasVencedoras.includes(6)} />
        <Square valor={quadrados[7]} func={() => handleClick(7)} vencedor={CasasVencedoras.includes(7)} />
        <Square valor={quadrados[8]} func={() => handleClick(8)} vencedor={CasasVencedoras.includes(8)} />
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
