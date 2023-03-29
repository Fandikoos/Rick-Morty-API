window.addEventListener('DOMContentLoaded', (event) => {

  //Conectamos con la api a través de la id para saber toda la información acerca de él
  const apiRickDetails = async (id)=>{
    let url = 'https://rickandmortyapi.com/api/character/' + id   
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    createCharacterDetail(data);
  }

  const fetchCharacter = async (id) => {
    await apiRickDetails(id);
  }

  //Con esto leemos de la URL el parametro correspondiente a la id del character
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  console.log(id);
  if(id !== undefined) fetchCharacter(id);

  //Construimos la tartjeta que contendra la información detallada del personaje
  const createCharacterDetail = (item) => {
    const characterDetail = document.querySelector("#details_character");
    const cardDetail = document.createElement("div");
      cardDetail.classList.add("maxi-card-detail");
    cardDetail.innerHTML = `
    <div class="card-detail" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top" alt="imagen del personaje">
      <div class="card-body-detail">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Bienvenido a la página detallada de ${item.name}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.gender}</li>
        <li class="list-group-item">${item.status}</li>
        <li class="list-group-item">${item.species}</li>
      </ul>
      <div class="card-body-detail">
        <a href="#" class="card-link">Que vaya al index</a>
      </div>
  </div>
    `

    characterDetail.innerHTML = '';
    characterDetail.appendChild(cardDetail);
  }


});
