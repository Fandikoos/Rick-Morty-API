const apiRickOrigin = async (pagina) => {
    let url = 'https://rickandmortyapi.com/api/location?page=' + pagina
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    const divOrigin = document.querySelector("#location");
    divOrigin.innerHTML = "";

    data.results.map(item=> {
        const divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><b>Name: </b>${item.name}</h5>
                <p class="card-text"><b><u>Type:</u></b> ${item.type}</p>
                <p class="card-text"><b><u>Dimension:</u></b> ${item.dimension}</p>
            </div>
        </div>
            `

            divOrigin.appendChild(divItem);
    })
}

apiRickOrigin(1);