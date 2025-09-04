function inserirCurso() {
    const inputs = document.querySelectorAll("input")

    const curso = {
        nome: inputs[0].value,
        turno: inputs[1].value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    })
    .then((res) => res.json())
    .then((cursoSalvo) => {
        pegarCursos() 

        
        inputs[0].value = ""
        inputs[1].value = ""
    })
}