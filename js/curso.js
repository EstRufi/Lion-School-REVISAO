import { getCursos } from "./methods.js";

const caregarBotao = async function(){
    const dados = await getCursos()
    if(dados){
        criarPagina(dados)
    }
    else
        return "Erro ao pegar dados"
}

export const criarPagina = async function(cursos){
    let main = document.getElementById('main')
    main.replaceChildren()

    let divPrincipal = document.createElement('div')
    divPrincipal.className = 'principal'

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
    imgComputador.src = './img/devices.svg'


    const imgMulher = document.createElement('img')
    imgMulher.src = './img/studant.svg'
    imgMulher.className = 'imgMulher'
    
    let divButoes = document.createElement('div')
    divButoes.className = 'botoes'

    cursos.forEach(buscaCursos => {
        let bntCursos = document.createElement('button')
        bntCursos.className = 'bntCursos'
        
        let imgIcon = document.createElement('img')
        imgIcon.src = buscaCursos.icon

        let pSigla = document.createElement('p')
        pSigla.textContent = buscaCursos.sigla

        bntCursos.append(imgIcon,pSigla)
        divButoes.append(bntCursos)
    })

    divEscolhaCurso.append(h1EscolhaCurso,imgComputador)
    divPrincipal.append(divEscolhaCurso,imgMulher,divButoes)
    main.appendChild(divPrincipal)
}

caregarBotao()