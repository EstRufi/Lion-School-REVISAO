import { getAlunoscurso } from "./methods.js";

export const carregarLista = async function(){
    const dados = await getAlunoscurso()

    if(dados){
        return criarLista(dados)
    }
    else
        return "Parabéns vc quebro o bagulho"
}

export const criarLista = function(infoAlunos){
    const main = document.getElementById('main')
    main.replaceChildren()


    let h1NomeCurso = document.createElement('h1')
    h1NomeCurso.textContent = infoAlunos.nome
    
    main.append(h1NomeCurso)
}

carregarLista()