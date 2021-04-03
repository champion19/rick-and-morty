getText();

async function getText() {
    const url = 'https://rickandmortyapi.com/api/episode';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            return info.map(function(personaje) {
                let html = `
                <div class="col">
                    <div class="card card-hover">
                    <img src="assets/images/rick-morty.jpg" class=" card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name} </h5>
                            <p class="card-text">
                                <ul>
                                <li><strong class="text-info">Episodio:</strong> ${personaje.episode}</li>
                                <li><strong class="text-info">fecha de creacion:</strong> ${personaje.air_date}</li>
                                </ul>
                            </p>
                             <a href="episode-character.html?id=${personaje.id}" target="_blank" class="btn btn-primary">!Go¡</a>
                            </div>     
                        </div>
                    </div>
                </div>
                `;
                contentEpisodes.innerHTML += html;
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}