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
            alert("Error Returned: " + response.statusText);
        }
    })
};

//handle the event of clicking submit button
var formSubmitHandler = function(event){
    event.preventDefault();
    //input box you type into
    let pokeName = document.getElementById("pokename").value;
    if(pokeName){
      getPokeData(pokeName)
        
        pokeName = document.getElementById("pokename");
        pokeName.value = "";
   
    }else{
        alert("Enter a correct Pokemon name!");
    }
}

let displayPokeData = function(data, pokeName){
    results.innerText = "";
    //get pokemon name
    let name = data.name
    let nameEl = document.createElement('div');
    nameEl.classList = 'poke-interface';
    nameEl.textContent = "Name: " + name;
    //console.log(name);


    results.appendChild(nameEl);

}






pokeInterfaceEl.addEventListener("submit", formSubmitHandler);