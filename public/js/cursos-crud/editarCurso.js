function editarCurso(idCurso) {
    console.log("vou editar o curso", idCurso)
    const inputs = document.querySelectorAll("input")

    fetch(url + idCurso)
        .then((res) => res.json())
        .then((curso) => {
            console.log("curso veio", curso)
            inputs[0].value = curso.id
            inputs[1].value = curso.nome
            inputs[2].value = curso.turno
        })
}