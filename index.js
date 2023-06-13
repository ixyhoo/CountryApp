
const buttonSortName = document.getElementById("minToMax");
const buttonSortPopulation = document.getElementById("maxToMin"); 
const buttonSortAplha = document.getElementById("alpha"); 
const inputSearch = document.getElementById("search");
const inputRange = document.getElementById("range");

let countries = [];

async function fetchCountries(search) {

   await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
        .then((data) => (countries = data.countries))
            console.log(countries);
        
    
}


// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
