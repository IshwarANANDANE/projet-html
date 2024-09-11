// Identifier le bouton
const btn = document.getElementById("btn");

// Définir une fonction
function handleClick(e) {
    e.target.innerHTML = "bonjour";
}

// Ajouter un événement de clic
btn.addEventListener("click", handleClick);

// Log pour tester
console.log("test ...", btn);
