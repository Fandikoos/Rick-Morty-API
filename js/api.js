
//Targeteamos al id de la etiqueta form
const searchForm = document.querySelector("#form_search");
let inputSearchText = "";

//Llamada para cuando introduzcamos un nombre en el buscador, tipo submit que es cuando presiona el enter.
searchForm.addEventListener("submit", (event)=>{
    //Cogemos la pagina en la que estamos para poder filtrar los resultados
    const pageSelector = document.querySelector("#pag");
    console.log(pageSelector.value);
    //Esto es para evitar que se recargue la página
    event.preventDefault();
    //Aquí esta el texto escrito
    const inputSearch = document.querySelector("#buscador");
    //Introducimos el valor dentro de la variable de texto que hemos creado arriba
    inputSearchText = inputSearch.value;
    console.log(inputSearch.value)
    //Buscara en función de la página que estemos
    apiRick(pageSelector.value);
})


const apiRick = async (pagina)=>{
    //Concatenamos la pagina para saber en que pagina de la api estamos para que muestre esos personajes que correspondan
    let url = 'https://rickandmortyapi.com/api/character/?page=' + pagina   
    const api = await fetch(url);
    //Transformamos a json los resultado para poder interactuar con ellos
    const data = await api.json();
    //Los pintamos para ver sus atributos en consola (name, gender, image...)
    console.log(data);
    //Seleccionamos el id de html donde haremos las tarjetas (cards)
    const divCharacter = document.querySelector("#characters");
    //Para poder pasar a las demás páginas de la API
    divCharacter.innerHTML = "";
    

    //Esta función nos va a permitir ir recorriendo cada uno de los items (characters de la api) e ir poniendolos en tarjetas gracias a este map
    data.results.map(item=>{
        //Con este if podemos filtrar lo que hemos escrito en el buscador, si hay algo escrito filtrara por ese nombre y si no hay nada escrito mostrará todas las tarjetas de characters
        if(item.name.toUpperCase() === inputSearchText.toUpperCase() || inputSearchText === ""){
            const divItem=document.createElement('div')
            //Pintamos como sería la estructura de las tarjetas en nuestra web, concatenando propiedades de la api como image, name, gender, species...
            divItem.innerHTML=`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><b>Name: </b>${item.name}</h5>
                    <p class="card-text"><b><u>Species:</u></b> ${item.species}</p>
                    <p class="card-text"><b><u>Gender:</u></b> ${item.gender}</p>
                    <p class="card-text"><b><u>Status:</u></b> ${item.status}</p>
                    <a href="detail_pag.html?id=${item.id}" id="detail_card" class="btn btn-primary">See info</a>
                </div>
            </div>
            `

            //Concatenamos la tarjeta al elemento del html ("le administramos un hijo")
            divCharacter.appendChild(divItem);
        }
    });

}

apiRick(1);






