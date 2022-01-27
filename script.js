// Création du Bouton Ajouter :
var buttonAdd = document.querySelector(".buttonAdd");

// Création de la Variable de la Liste à Faire
var listeAfaire = document.querySelector(".listeAfaire");

// Création de la Variable de la Liste Finies
var listeFinies = document.querySelector(".listeFinies");


// Création de l'Ajout de la Tache dans la Liste
buttonAdd.addEventListener("click", function(){
    let tachesAjoutee = document.createElement("li");
    tachesAjoutee.innerText = document.getElementById("taches").value;
    console.log(tachesAjoutee);
    listeAfaire.appendChild(tachesAjoutee);
    document.getElementById("taches").value = "";

    //Création du Boutton Taches Faites
    let buttonFait = document.createElement("button");
    buttonFait.style.marginRight = "30px";
    tachesAjoutee.prepend(buttonFait);
    buttonFait.innerText = "Fait";
    //Ecoute du boutton tache faite
    buttonFait.addEventListener("click", function(){
        tachesAjoutee.style.textDecoration = "line-through";
        tachesAjoutee.style.color = "red";
        buttonFait.remove();
    })


    //Création du Boutton suppression
    let buttonSupp = document.createElement("button");
    tachesAjoutee.style.fontSize = "20px"; 
    buttonSupp.innerText = "Supprimer";
    buttonSupp.style.marginLeft = "20px";
    buttonSupp.style.color = "#DC143C";
    buttonSupp.style.borderRadius = "10 px";
    tachesAjoutee.appendChild(buttonSupp);
    // Ecoute du bouton au Click
    buttonSupp.addEventListener("click", function(){
        let tachesFinies = document.createElement("li");
        tachesFinies = tachesAjoutee;
        listeFinies.appendChild(tachesFinies);
        tachesFinies.style.color = "green";
        buttonSupp.remove();
        tachesFinies.style.textDecoration = "none";
        
    
    
    })
})

