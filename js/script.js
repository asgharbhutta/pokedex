//form
let pokeInterfaceEl = document.getElementById("poke-interface");

//displayed data
let results = document.getElementById("results");

var getPokeData = function(pokeName){
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeName;

    fetch(url)
    .then(function(response){
        if(response.ok){
            response.json()
            .then(function(data){
                //displayWeatherData(data, city);
                displayPokeData(data, pokeName)
            });
        }else{
            alert("Error Returned: Pokemon not found" + response.statusText);
        }
    })
};

//handle the event of clicking submit button
var formSubmitHandler = function(event){
    event.preventDefault();
    //input box you type into
    let pokeName = document.getElementById("pokename").value.toLowerCase();
    if(pokeName){
      getPokeData(pokeName)
        
        pokeName = document.getElementById("pokename");
        pokeName.value = "";
   
    }else{
        alert("Enter a correct Pokemon name!");
    }
}

let displayPokeData = function(data, pokeName){
    //reset the data displayed
    results.innerText = "";

    //get pokemon name
    let name = data.name
    let nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    let nameEl = document.createElement('div');
    nameEl.classList = 'poke-interface-render';
    nameEl.textContent = "Name: " + nameFormatted;
   
    //get pokemon image
    let pokePic = data.sprites.other['official-artwork'].front_default
    let pokePicEl = document.createElement('img');
    pokePicEl.classList = 'poke-interface-render';
    pokePicEl.setAttribute("src", pokePic)


    results.appendChild(nameEl);
    results.appendChild(pokePicEl);

}






pokeInterfaceEl.addEventListener("submit", formSubmitHandler);