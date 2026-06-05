const prompt = require("prompt-sync")()


let pontosJogador = 0
let pontosComputador = 0
let empates = 0
let historico = []


function mostrarPlacar() {
  console.log(`🏆 Você: ${pontosJogador}`)
  console.log(`🤖 Computador: ${pontosComputador}`)
  console.log(`😐 Empates: ${empates}`)
}

const meta = 2

let rodada = 1


while (pontosJogador < meta && pontosComputador < meta) {
 
console.log(`🎮 Rodada ${rodada}`) 

  const opcoes = ["pedra", "papel", "tesoura"]

  const escolhaJogador = prompt("Pedra, papel ou tesoura? ").toLowerCase()

  if (
    escolhaJogador !== "pedra" &&
    escolhaJogador !== "papel" &&
    escolhaJogador !== "tesoura"
  ) {
    console.log("❌ Escolha inválida!")
    continue
  }

  const numeroAleatorio = Math.floor(Math.random() * 3)

  const escolhaComputador = opcoes[numeroAleatorio]

  console.log("🤖 Pensando...")

  console.log(`🤖 Computador escolheu: ${escolhaComputador}`)

  if (escolhaJogador === escolhaComputador) {

    console.log("😐 Empate!")
    empates++
    historico.push(
      `🎮 Rodada ${rodada} | 😐 Empate| ${escolhaJogador} x ${escolhaComputador}`
    )

  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {

    const frasesVitoria = [
      "🎉 Você venceu!",
  "🔥 Boa jogada!",
  "😎 Você mandou bem!",
  "🏆 Vitória merecida!",
  "⚡ Você foi mais rápido!"
    ]
   
    const fraseAleatoria = frasesVitoria[Math.floor(Math.random() * frasesVitoria.length)]
    
    console.log(fraseAleatoria)
    historico.push(
    `🎮 Rodada ${rodada} | 🏆 Vitória | ${escolhaJogador} x ${escolhaComputador}`
    )
   
    pontosJogador++

  } else {

    const frasesDerrota = [
     "💀 Você perdeu!",
  "🤖 O computador levou essa!",
  "😅 Tenta de novo!",
  "⚡ Dessa vez não deu!",
  "🎯 O computador acertou a jogada!"
] 
    const fraseAleatoria = 
    frasesDerrota[Math.floor(Math.random() * frasesDerrota.length)]
    
    console.log(fraseAleatoria)
    historico.push(
       `🎮 Rodada ${rodada} | 💀 Derrota | ${escolhaJogador} x ${escolhaComputador}`
    )

    pontosComputador++

  }
  
mostrarPlacar()


rodada++
  
}
if (pontosJogador > pontosComputador) {
  console.log("🏆 Você venceu o campeonato!")
  console.log("\n📊 PLACAR FINAL")
    mostrarPlacar()

} else {
  console.log("🤖 O computador venceu o campeonato!")
}
console.log("\n📜 Histórico das rodadas:")

for (const rodadaHistorico of historico) {
  console.log(rodadaHistorico)
}