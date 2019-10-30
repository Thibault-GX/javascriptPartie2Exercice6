// Créer un tableau pour récupérer les ID
let tableID = document.getElementById('container'); //créer un tableau tableID avec les éléments de classe container, permet de ne pas analyser tout le HTML
let cellsID = tableID.getElementsByTagName('img'); //créer un tableau qui ciblera les balises img comprises dans tableID

// function pour changer l'image lorsque le pointeur passe sur l'image
function pictureChangeOver(){
  for (var i = 0; i < cellsID.length; i++) {  //pour toutes les valeurs de [i] (l'index du tableau) de 0 à la fin du tableau
    cellsID[i].addEventListener('mouseover' , function(){ //on récupère la valeur de [i] et on déclenche la fonction lors du passage du pointeur sur l'élément
      this.src = `assets/img/${this.id}_2.jpg`; //on remplace alors la source de CETTE valeur de [i] par un nouveau chemin contenant le nom de l'ID (ici, on donne le chemin de l'image _2)
    });
  }
}

// function pour changer l'image lorsque le pointeur quitte l'image
function pictureChangeBack(){
  for (var i = 0; i < cellsID.length; i++) {
    cellsID[i].addEventListener('mouseout' , function(){ //même réflexion que pour pictureChangeOver, mais cette fois lorsque le pointeur sort de l'élément
      this.src = `assets/img/${this.id}.jpg`; //cette fois, c'est le chemin original de l'image qui est ciblé
    });
  }
}

pictureChangeOver()
pictureChangeBack()
