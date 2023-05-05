// Sélectionnez tous les éléments qui ont un style de survol
var hoverElems = document.querySelectorAll('.hover-style');

// Les dix couleurs primaires
var primaryColors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE', '#808080', '#FFFFFF', '#000000'];

// Ajouter un événement "mouseover" à chaque élément
hoverElems.forEach(function(elem) {
  elem.addEventListener('mouseover', function() {
    // Générer un index de couleur aléatoire
    var randomIndex = Math.floor(Math.random() * primaryColors.length);
    var randomColor = primaryColors[randomIndex];
    
    // Modifier la propriété de style appropriée pour le survol
    elem.style.backgroundColor = randomColor;
    elem.style.color = 'white'; // par exemple, changer la couleur de la police pour une meilleure lisibilité
  });
});