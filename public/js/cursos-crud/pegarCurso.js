function pegarCurso() {
    const url = "https://curly-giggle-76q669w9q6j2r5w7-3000.app.github.dev/cursos/"
    
    fetch(url)
        .then((res) => res.json())
        .then((cursos) => {
            console.log('listando cursos', cursos)
            const dados = document.querySelector("tbody")
            dados.innerHTML = ""

            for (let i = 0; i < cursos.length; i++) {
                dados.innerHTML += `<tr>
                    <td>${cursos[i].id}</td>
                    <td>${cursos[i].nome}</td>
                    <td>${cursos[i].turno}</td>
                    <td>
                        <button onclick="editarCurso(${cursos[i].id})">Editar</button>
                        <button onclick="excluirCurso(${cursos[i].id})">Excluir</button>
                    </td>
                </tr>`
            }
        })
}

pegarCurso()