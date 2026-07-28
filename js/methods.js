'use strict'

const url = 'https://lion-school-phbo.onrender.com/'

export async function getCursos(){
    const response = await fetch(`${url}cursos`)
    const data = await response.json()
    return data

}