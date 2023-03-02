function buscar() {
  let input = document.getElementById("input").value;
  let url = "https://pokeapi.co/api/v2/pokemon/" + input;

  fetch(url)
    .then(pokemon => pokemon.json()) /* hacer una petición a la url especificada, y luego convierte la respuesta en un objeto javascript y se almacena en una variable pokemon*/
    .then(infoPokemon => {
      let nombre = document.getElementById("nombre");
      let id = document.getElementById("id");
      let imagen1 = document.getElementById("imagen1");
      let imagen2 = document.getElementById("imagen2");
      let peso = document.getElementById("peso");
      let altura = document.getElementById("altura");

      nombre.innerHTML = "Nombre: " + infoPokemon.name;
      id.innerHTML = "ID: " + infoPokemon.id;
      imagen1.src = infoPokemon.sprites.front_default;
      imagen2.src = infoPokemon.sprites.front_shiny;
      peso.innerHTML = "Peso: " + infoPokemon.weight;
      altura.innerHTML = "Altura: " + infoPokemon.height;
    })
    .catch(error => {
      nombre.innerHTML = "Error";
    });
}
