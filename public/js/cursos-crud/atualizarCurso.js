function atualizarCurso() {
    const inputs = document.querySelectorAll("input")

    const idCurso = inputs[0].value

    const curso = {
        nome: inputs[1].value,
        turno: inputs[2].value
    }

    fetch(url + idCurso, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    })
    .then((res) => res.json())
    .then((cursoAtualizado) => {
        pegarCursos() 

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    })
}