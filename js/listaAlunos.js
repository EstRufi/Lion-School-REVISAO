import { getAlunos } from "./methods.js";

const carregarLista = async function(){
    const dados = await getAlunos

    if(dados){
        criarLista(dados)
    }
    else
        return "Parabéns vc quebro o bagulho"
}

const criarLista = async function(infoAlunos){}