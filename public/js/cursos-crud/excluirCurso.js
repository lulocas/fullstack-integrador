function excluirCurso(idCurso) {
    fetch(url + idCurso, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then((cursoExcluido) => {
        pegarCursos() 
    })
}