const ler = require("prompt-sync")()

let pontosJogador = 0
let pontosComputador = 0
let historico = []
let empates = 0
let jogarNovamente = "sim"

const meta = 3

let rodada = 1

 while (jogarNovamente === "sim") {
 pontosJogador = 0
 pontosComputador = 0
 empates = 0 
 rodada = 1
 historico = []

 
while (pontosJogador < meta && pontosComputador < meta) {

    console.log(`🎮 Rodada ${rodada}`)

    const escolhaJogador = ler ("Escolha par ou impar: ").toLowerCase()

    const numeroJogador = Number(
        ler ("Digite um número de 0 a 10: ")
    )

    console.log(`🔢 Você escolheu ${numeroJogador}`)

    const numeroComputador = Math.floor(Math.random() * 11)

    console.log(`🤖 Computador escolheu ${numeroComputador}`)

    const soma = numeroJogador + numeroComputador

    console.log(`🔢 Total: ${soma}`)

    if (soma % 2 === 0) {
        console.log("📢 Deu PAR!")
    } else {
        console.log("📢 Deu IMPAR!")
    }

    if (
        (soma % 2 === 0 && escolhaJogador === "par") ||
        (soma % 2 !== 0 && escolhaJogador === "impar")
    ) {
        console.log("🎉 Você venceu!")
        pontosJogador++
    } else {
        console.log("💀 Você perdeu!")
        pontosComputador++

        historico.push(
            `🎮 Rodada ${rodada} | ${numeroJogador} + ${numeroComputador} = ${soma}`
    
        )

        rodada++
    }

    }
    
    console.log(`🏆 Você: ${pontosJogador}`)
    console.log(`🤖 Computador: ${pontosComputador}`)


    if (pontosJogador > pontosComputador) {
    console.log("🏆 Você venceu o campeonato!")
    } else {
    console.log("🤖 O computador venceu o campeonato!")
    
    }

console.log("\n📜 Histórico:")

for (const item of historico) {
    console.log(item)
  
}


jogarNovamente = ler("Deseja jogar novamente? (sim/não): ").toLowerCase()


} 
