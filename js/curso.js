import { getCursos } from "./methods.js";

export const criarPagina = function(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const divEscolhaCurso = document.createElement('div')
    divEscolhaCurso.className = 'escolhaCurso'

    const spanCurso = document.createElement('span')
    spanCurso.className = 'spanCurso'
    spanCurso.textContent = 'curso'

    const h1EscolhaCurso = document.createElement('h1')
    h1EscolhaCurso.className = 'h1GerenciarCurso'
    // Para poder colocar algo dentro do outro em um texto adicione append e em seguida compacte 
    h1EscolhaCurso.append('Escolha um ', spanCurso, ' para gerenciar')
    
    
    const imgComputador = document.createElement('img')
    // Colocar caminho
    imgComputador.src = './img/logo-image.png'

    divEscolhaCurso.append(h1EscolhaCurso,imgComputador)
    main.append(divEscolhaCurso)
}