

const apiRickDetails = async (id)=>{
  let url = 'https://rickandmortyapi.com/api/character/' + id   
  const api = await fetch(url);
  const data = await api.json();
}
