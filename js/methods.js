'use strict'

const url = 'https://lion-school-phbo.onrender.com/'

export async function getCursos(){
    const response = await fetch(`${url}cursos`)
    
    const data = await response.json()
    console.log(`Veio dos cursos ${data}`)
    return data

}

export async function getAlunoscurso(idCurso){
    const response = await fetch(`${url}alunos?curso_id=${idCurso}`)
    console.log(response)
    const data = await response.json()
    return data
}