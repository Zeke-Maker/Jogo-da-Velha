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
    const [historicoTexto, setHistoricoTexto] = useState([]);
    const [historicoTabuleiros, setHistoricoTabuleiros] = useState([Array(9).fill(null)]);
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [estado, setEstado] = useState(false);
    const [status, setStatus] = useState(null);
    const [CasasVencedoras, setCasasVencedoras] = useState([]);

    function reiniciarJogo() {
      setQuadrados(Array(9).fill(null));
      setEstado(false);
      setStatus(null);
      setCasasVencedoras([]);
      setHistoricoTexto([]);
      setHistoricoTabuleiros([Array(9).fill(null)]);
    }

  function mostrarJogador() {
    if (estado == false) {
      return "Vez do jogador X";
    } else {
      return "Vez do jogador O";
    }
  }

  function calcularVencedor(tabuleiro) {
    if (
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
    } else if (
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
    } else if (
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

    else if (
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
    } else if (
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
    } else if (
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
      tabuleiro.every(casa => casa != null)
    ) {
      return "Deu empate!";
    }

    return null;
  }

  function handleClick(i) {
    const quadradoTemp = quadrados.slice();

    if (status != null) return;
    if (quadradoTemp[i] != null) return;

    let jogador;

    if (estado == false) {
      quadradoTemp[i] = "X";
      jogador = "X";
    } else {
      quadradoTemp[i] = "O";
      jogador = "O";
    }

    setQuadrados(quadradoTemp);
    setEstado(!estado);
    setHistoricoTexto([...historicoTexto, `jogada ${historicoTexto.length + 1}: ${jogador} na posição ${i}`]);
    setHistoricoTabuleiros([...historicoTabuleiros, quadradoTemp]);

    const resultado = calcularVencedor(quadradoTemp);
    setStatus(resultado);

    if (resultado === "Jogador 1 venceu!") {
      setPlacarX(placarX + 1);
    } else if (resultado === "Jogador 2 venceu!") {
      setPlacarO(placarO + 1);
    } else if (resultado === "Deu empate!") {
      setEmpates(empates + 1);
    }

    if (vsMaquina && resultado == null && jogador === "X") {
      setTimeout(() => {
        jogadaMaquina(quadradoTemp);
      }, 500);
    }
  }

  function jogadaMaquina(tabuleiroAtual) {
    if (status != null) return;

    const vazios = [];

    for (let i = 0; i < 9; i++) {
      if (tabuleiroAtual[i] == null) {
        vazios.push(i);
      }
    }

    if (vazios.length === 0) return;

    const random = vazios[Math.floor(Math.random() * vazios.length)];
    const novoTabuleiro = tabuleiroAtual.slice();

    novoTabuleiro[random] = "O";

    setQuadrados(novoTabuleiro);
    setEstado(false);

    setHistoricoTexto(prev => [
      ...prev,
      `jogada ${prev.length + 1}: O na posição ${random}`
    ]);

    setHistoricoTabuleiros(prev => [...prev, novoTabuleiro]);

    const resultado = calcularVencedor(novoTabuleiro);
    setStatus(resultado);

    if (resultado === "Jogador 2 venceu!") {
      setPlacarO(prev => prev + 1);
    } else if (resultado === "Deu empate!") {
      setEmpates(prev => prev + 1);
    }
  }
  function desfazerJogada() {
    if (historicoTabuleiros.length <= 1) return;

    const novosTabuleiros = historicoTabuleiros.slice(0, historicoTabuleiros.length - 1);
    const tabuleiroAnterior = novosTabuleiros[novosTabuleiros.length - 1];

    const novosTextos = historicoTexto.slice(0, historicoTexto.length - 1);

    setHistoricoTabuleiros(novosTabuleiros);
    setHistoricoTexto(novosTextos);
    setQuadrados(tabuleiroAnterior);
    setEstado(!estado);
    setStatus(null);
    setCasasVencedoras([]);
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

      <h2>{mostrarJogador()}</h2>
      <h1>{status}</h1>

      <button onClick={reiniciarJogo}>Reiniciar</button>
      <button onClick={desfazerJogada} disabled={historicoTabuleiros.length <= 1}>
        Desfazer Jogada
      </button>

      <div>
        <h3>Placar</h3>
        <p>X: {placarX}</p>
        <p>O: {placarO}</p>
        <p>Empates: {empates}</p>
      </div>

      <div>
        <h3>Histórico de jogadas:</h3>
        <ul>
          {historicoTexto.map((jogada, index) => (
            <li key={index}>{jogada}</li>
          ))}
        </ul>
      </div>
    </>
  );
}