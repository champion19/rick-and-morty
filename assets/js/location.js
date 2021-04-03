getLocation();

async function getLocation() {
    const url = 'https://rickandmortyapi.com/api/location';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            return info.map(function(personaje) {
                const html = `
                <div class="col">
                    <div class="card card-hover">
                    <img src="assets/images/rick-morty.jpg" class=" card-img-top">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">
                                <ul>
                                <li><strong class="text-info">Nombre:</strong> ${personaje.name}</li>
                                <li><strong class="text-info">Tipo:</strong> ${personaje.type}</li>
                                <li><strong class="text-info">Dimension:</strong>${personaje.dimension}</li>

                                </ul>
                            </p>
                          
                            </div>     
                        </div>
                    </div>
                </div>
                `;
                listLocation.innerHTML += html;
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}