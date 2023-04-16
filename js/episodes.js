const apiRickEpisodes = async (pagina) => {
    let url = 'https://rickandmortyapi.com/api/episode?page='
    const api = await fetch(url)
    const data = await api.json();
    console.log(data);
    const divEpisode = document.querySelector("#episodes")
    divEpisode.innerHTML="";

    data.results.map(item => {
        const divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><b>Name: </b>${item.name}</h5>
                <p class="card-text"><b><u>Air Date:</u></b> ${item.air_date}</p>
                <p class="card-text"><b><u>Episode:</u></b> ${item.episode}</p>
            </div>
        </div>
        `

        divEpisode.appendChild(divItem);
    })
}

apiRickEpisodes(1);