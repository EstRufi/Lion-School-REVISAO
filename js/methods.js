const url = 'https://lion-school-phbo.onrender.com/'

export async function getCursos(){
    const response = await fetch(`${url}/cursos`)

    if(!response.ok) throw new Error(`Erro ao puxar os cursos cadastrados!!`)
}