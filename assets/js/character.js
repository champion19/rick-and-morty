    let query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var id = vars[i].split("=");
    }
    const url = `https://rickandmortyapi.com/api/character/${id[1]}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById('container')
            element.innerHTML = `
            <div class="row">
            <div class="col-md-5 bg-size-cover" style="background:url(${data.image});height:100vh;">
            </div>
            <div class="col-md-5">
            <div class="pt-5">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>
            </ol>
            </nav>
            <h1 class="text-muted"><span class="text-danger">&bull;</span> ${data.name}</h1>
            <p><strong>Genero:</strong> ${data.gender}</p>
            <p><strong>Especie:</strong> ${data.species}</p>
            </div>
            </div>
            </div>
            `;
        })
        .catch(err => console.log(err))