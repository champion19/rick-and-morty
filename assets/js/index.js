// Consulta de API Character
getText();

async function getText() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            return info.map(function(personaje) {
                if (personaje.status == 'Alive') {
                    statusChar = `<span class="badge bg-success">${personaje.status}</span>`;
                } else {
                    statusChar = `<span class="badge bg-danger">${personaje.status}</span>`;
                }
                const html = `
                <div class="col">
                    <div class="card">
                        <img src="${personaje.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name} ${statusChar}</h5>
                            <p class="card-text">
                            <ul>
                            <li><strong class="text-info">Especie:</strong> ${personaje.species}</li>
                            <li><strong class="text-info">Genero:</strong> ${personaje.gender}</li>
                            </ul>
                            </p>
                            <div class="btn-group" role="group" aria-label="Basic example"align="center">
                             <a href="single.html?id=${personaje.id}" target="_blank" class="btn btn-outline-primary">!Go¡</a>
                             
                             <a href="https://rickandmortyapi.com/documentation" target="_blank"class="btn btn-primary btn btn-info">Ver docs</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                `;
                content.innerHTML += html;
                console.log(personaje);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}