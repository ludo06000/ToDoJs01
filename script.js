// Creating the Add Button :
var buttonAdd = document.querySelector(".buttonAdd");

// Creation of the To Do List Variable :
var listeAfaire = document.querySelector(".listeAfaire");

// Creation of the Finite List Variable:
var listeFinies = document.querySelector(".listeFinies");


// Creating the Adding the Spot to the List :
buttonAdd.addEventListener("click", function(){
    let tachesAjoutee = document.createElement("li");
    tachesAjoutee.innerText = document.getElementById("taches").value;
    console.log(tachesAjoutee);
    listeAfaire.appendChild(tachesAjoutee);
    document.getElementById("taches").value = "";

    //Creation of the button Stains Done :
    let buttonFait = document.createElement("button");
    buttonFait.style.marginRight = "20px";
    tachesAjoutee.prepend(buttonFait);
    buttonFait.innerText = "Fait";
    //Listening to the button task done:
    buttonFait.addEventListener("click", function(){
        tachesAjoutee.style.textDecoration = "line-through";
        tachesAjoutee.style.color = "red";
        buttonFait.remove();
    })


    //Creation of the Delete Button :
    let buttonSupp = document.createElement("button");
    tachesAjoutee.style.fontSize = "30px"; 
    buttonSupp.innerText = "Supprimer";
    buttonSupp.style.marginLeft = "20px";
    buttonSupp.style.color = "#DC143C";
    buttonSupp.style.borderRadius = "10 px";
    tachesAjoutee.appendChild(buttonSupp);
    // Listening to the button at the Click
    buttonSupp.addEventListener("click", function(){
        let tachesFinies = document.createElement("li");
        tachesFinies = tachesAjoutee;
        listeFinies.appendChild(tachesFinies);
        tachesFinies.style.color = "green";
        buttonSupp.remove();
        tachesFinies.style.textDecoration = "none";
        
    
    
    })
})

