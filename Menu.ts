import readLine = require("readline-sync");
import { JogoRetro } from "./src/model/JogoRetro";

export function main() {

    let opcao: number;

    const jogoRetro: JogoRetro = new JogoRetro(1, "Final Fantasy I", 50, 10, 1987, "SNES", "RPG");
    jogoRetro.visualizar();
    jogoRetro.comprar(1);
    jogoRetro.visualizar();
    jogoRetro.vender(2);
    jogoRetro.visualizar();

    while (true) {

        console.log(`*****************************************************`);
        console.log(`                                                     `);
        console.log(`                    Retro Games                      `);
        console.log(`                                                     `);
        console.log(`*****************************************************`);
        console.log(`                                                     `);
        console.log(`            1 - Adicionar Novo Jogo                  `);
        console.log(`            2 - Exibir Coleção de Jogos              `);
        console.log(`            3 - Procurar um Jogo                     `);
        console.log(`            4 - Editar um Jogo                       `);
        console.log(`            5 - Apagar um Jogo                       `);
        console.log(`            6 - Comprar um Jogo                      `);
        console.log(`            7 - Vender um Jogo                       `);
        console.log(`            0 - Encerrar                             `);
        console.log(`                                                     `);
        console.log(`*****************************************************`);
        console.log(`                                                     `);

        console.log(`Entre com a opcao desejada: `);
        opcao = readLine.questionInt(`> : `);

        if (opcao == 0) {
            console.log(`Retro Games - Jogos antigos, jogadores eternos.`);
            sobre();
            process.exit(0);
        }

        switch(opcao) {
            case 1: 
                console.log(`\n\nAdicionar Novo Jogo\n\n`);

                keyPress();
                break;
            case 2:
                console.log(`\n\nExibir Coleção de Jogos\n\n`);

                keyPress();
                break;
            case 3:
                console.log(`\n\nProcurar um Jogo\n\n`);

                keyPress();
                break;
            case 4:
                console.log(`\n\nEditar um Jogo\n\n`);

                keyPress();
                break;
            case 5:
                console.log(`\n\nApagar um Jogo\n\n`);

                keyPress();
                break;
            case 6:
                console.log(`\n\nComprar um Jogo\n\n`);

                keyPress();
                break;
            case 7:
                console.log(`\n\nVender um Jogo\n\n`);

                keyPress();
                break;
            default:
                console.log(`\n\nOpção inválida!\n\n`);

                keyPress();
                break;
        }

    }
}


function sobre(): void {
    console.log(`*****************************************************`);
    console.log(`Projeto Desenvolvido por: Matheus Pereira Xavier`);
    console.log(`Email: matheus97p.q@gmail.com`);
    console.log(`GitHub: https://github.com/Matheus97px`);
    console.log(`*****************************************************`);
}

function keyPress(): void {
    console.log(`Pressione enter para continuar... `);
    readLine.prompt();
}

main();