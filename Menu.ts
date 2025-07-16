import readLine = require("readline-sync");
import { JogoRetro } from "./src/model/JogoRetro";
import { ProdutoController } from "./src/controller/ProdutoController";
import { colors } from "./src/util/Colors";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, quantidade, preco, anoLancamento, itemCarrinho: number;
    let nome, videoGame, produtoCarrinho, categoria: string;

    console.log(`Criando colecao de jogos...`);

    let jogo1: JogoRetro = new JogoRetro(produtos.gerarId(), "Super Mario Bros", 70, 10, 1985, "SNES", "Plataforma");
    produtos.cadastrar(jogo1);
    let jogo2: JogoRetro = new JogoRetro(produtos.gerarId(), "Final Fantasy", 60, 5, 1990, "NES", "RPG");
    produtos.cadastrar(jogo2);
    let jogo3: JogoRetro = new JogoRetro(produtos.gerarId(), "Mortal Kombat", 80, 20, 1993, "SNES", "Luta");
    produtos.cadastrar(jogo3);
    let jogo4: JogoRetro = new JogoRetro(produtos.gerarId(), "Castlevania:Symphony of the Night", 40, 15, 2001, "PS1", "Plataforma RPG");
    produtos.cadastrar(jogo4);
    let jogo5: JogoRetro = new JogoRetro(produtos.gerarId(), "Zelda: Majora's Mask", 70, 10, 1998, "N64", "Aventura");
    produtos.cadastrar(jogo5);


    produtos.listarTodos();

    while (true) {
        console.log(colors.fg.black, colors.bg.white);
        console.log(`*****************************************************`);
        console.log(`                                                     `);
        console.log(`                  *Retro Games*                      `);
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
        console.log(`            8 - Exibir Saldo da Loja                 `); 
        console.log(`            0 - Encerrar                             `);
        console.log(`                                                     `);
        console.log(`*****************************************************`);
        console.log(`                                                     `);
        console.log(colors.reset);

        console.log(`Entre com a opcao desejada: `);
        opcao = readLine.questionInt(`> : `);

        if (opcao == 0) {
            console.log(`\nRetro Games - Jogos antigos, jogadores eternos.`);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(`\n\nAdicionar Novo Jogo\n\n`);

                console.log(`Digite o nome do jogo: `);
                nome = readLine.question(`> : `);

                console.log(`Digite o preco do jogo (R$): `);
                preco = readLine.questionFloat(`> : `);

                console.log(`Digite a quantidade do jogo: `);
                quantidade = readLine.questionInt(`> : `);

                console.log(`Digite o ano de lancamento do jogo: `);
                anoLancamento = readLine.questionInt(`> : `);

                console.log(`Digite o video game do jogo: `);
                videoGame = readLine.question(`> : `);

                console.log(`Digite a categoria do jogo: `);
                categoria = readLine.question(`> : `);

                produtos.cadastrar(new JogoRetro(produtos.gerarId(), nome, preco, quantidade, anoLancamento, videoGame, categoria));

                keyPress();
                break;
            case 2:
                console.log(`\n\nExibir Coleção de Jogos\n\n`);

                produtos.listarTodos();

                keyPress();
                break;
            case 3:
                console.log(`\n\nProcurar um Jogo\n\n`);

                console.log(`Digite o Id do jogo: `);
                id = readLine.questionInt(`> : `);

                produtos.procurarPorId(id);

                keyPress();
                break;
            case 4:
                console.log(`\n\nEditar um Jogo\n\n`);

                console.log(`Digite o Id do jogo: `);
                id = readLine.questionInt(`> : `);

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log(`Digite o nome do jogo: `);
                    nome = readLine.question(`> : `);

                    console.log(`Digite o preco do jogo (R$): `);
                    preco = readLine.questionFloat(`> : `);

                    console.log(`Digite a quantidade do jogo: `);
                    quantidade = readLine.questionInt(`> : `);

                    console.log(`Digite o ano de lancamento do jogo: `);
                    anoLancamento = readLine.questionInt(`> : `);

                    console.log(`Digite o video game do jogo: `);
                    videoGame = readLine.question(`> : `);

                    console.log(`Digite a categoria do jogo: `);
                    categoria = readLine.question(`> : `);

                    produtos.atualizar(new JogoRetro(id, nome, preco, quantidade, anoLancamento, videoGame, categoria));

                } else {
                    console.log(`\nJogo nao encontrado!`);
                }

                keyPress();
                break;
            case 5:
                console.log(`\n\nApagar um Jogo\n\n`);

                console.log(`Digite o Id do jogo: `);
                id = readLine.questionInt(`> : `);
                produtos.deletar(id);

                keyPress();
                break;
            case 6:
                console.log(`\n\nComprar um Jogo\n\n`);

                console.log(`Digite o Id do jogo: `);
                id = readLine.questionInt(`> : `);
                while (id <= 0) {
                    console.log(`\nId nao pode ser negativo ou zero!\n`);
                    console.log(`Digite o Id do jogo: `);
                    id = readLine.questionInt(`> : `);
                }

                produtoCarrinho = produtos.buscarNoArray(id);
                console.log(`\nNome do jogo: ${produtoCarrinho?.nome}`);
                console.log(`Digite a quantidade de jogos a serem comprados: `);
                itemCarrinho = readLine.questionInt(`> : `);

                produtos.comprar(id, itemCarrinho);

                keyPress();
                break;
            case 7:
                console.log(`\n\nVender um Jogo\n\n`);

                console.log(`Digite o Id do jogo: `);
                id = readLine.questionInt(`> : `);
                while (id <= 0) {
                    console.log(`\nId nao pode ser negativo ou zero!\n`);
                    console.log(`Digite o Id do jogo: `);
                    id = readLine.questionInt(`> : `);
                }

                produtoCarrinho = produtos.buscarNoArray(id);
                console.log(`\nNome do jogo: ${produtoCarrinho?.nome}`);
                console.log(`Digite a quantidade de jogos a serem vendidos: `);
                itemCarrinho = readLine.questionInt(`> : `);

                produtos.vender(id, itemCarrinho);

                keyPress();
                break;
            case 8:
                console.log(`\n\nMostrar saldo\n\n`);

                produtos.mostrarSaldo();
                
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
    console.log(colors.fg.bluestrong, colors.bg.white)
    console.log(`*****************************************************`);
    console.log(`Projeto Desenvolvido por: Matheus Pereira Xavier`);
    console.log(`Email: matheus97p.q@gmail.com`);
    console.log(`GitHub: https://github.com/Matheus97px`);
    console.log(`*****************************************************`);
    console.log(colors.reset);
}

function keyPress(): void {
    console.log(`Pressione enter para continuar... `);
    readLine.prompt();
}

main();