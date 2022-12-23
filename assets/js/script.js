let btnBuscar = document.querySelector('#buscarPokemon')
btnBuscar.addEventListener('click', ()=>{
    //Rescatamos la información del input
    const inputPokemon = document.querySelector('.inputPokemon').value
    const divPokemon = document.querySelector('#listadoPokémon')

    //Pasamos la información del input a nuestra consulta API con [template string]
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`)
  .then((response) => response.json())
  .then((data) => 
  divPokemon.innerHTML += `
  
<div class="col-sm-12 col-md-4 col-lg-3 my-3">
    <div class="card" style="width: 90%; margin: 0 auto;">
        <img src='${data.sprites.front_default}' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${data.name}</h5>
            <p class="text-center">Peso: ${data.weight}</p>
            <p class="text-center">Altura: ${data.height}</p>
            <p class="text-center">id: ${data.id}</p>
        </div>
    </div>
</div>  
  `
  );
})