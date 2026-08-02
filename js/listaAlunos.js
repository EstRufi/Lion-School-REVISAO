import { getAlunoscurso } from "./methods.js";

export const carregarLista = async function(idcurso){
    const dados = await getAlunoscurso(idcurso.id)

    if(dados){
        return criarLista(dados,idcurso.nome)
    }
    else
        return "Parabéns vc quebro o bagulho"
}

export const criarLista = function(infoAlunos,nomecurso){
    const main = document.getElementById('main')
    main.className = 'mainLista'
    main.replaceChildren()

    console.log(`Veio dos alunos ${infoAlunos}`)
    let h1NomeCurso = document.createElement('h1')
    h1NomeCurso.textContent = nomecurso
    
    main.append(h1NomeCurso)
}