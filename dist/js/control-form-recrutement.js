
// mise en style des champs obligatoire avec css animate et js **/
var spanError = "<span class='animated fadeIn alert-danger' style='padding:5px'><i class='fa fa-times-circle'></i>";


// mise en style des non champs obligatoires avec css animate et js **/
var spanWarning = "<span class='animated fadeIn alter-warning' style='padding:5px'><i class='fa fa-check-circle'></i>";


// mise en style en cas de champ valide //
var spanSuccess = "<span class='animated fadeIn alert-success' style='padding:5px'><i class='fa fa-check-circle'></i> Champ valide";

// fermeture du span //
var spanClose="</span>";

var input = document.querySelectorAll('.file');
var preview = document.querySelectorAll('.preview');

// on ajoute une 1ère boucle pour parcourir les inputs de class file
for(var i=0; i<input.length; i++){

  input[i].addEventListener('change', checkFile);
  function checkFile() {
    // une deuxième boucle est ajoutée ici pour parcour les inputs à l'intérieur de la fonction en vue d'afficher le resultat dans les blocs de la class .preview
    for(k=0; k<input.length; k++){ 
      while(preview[k].firstChild) {
        preview[k].removeChild(preview[k].firstChild);
      }

      var curFiles = input[k].files;
      if(curFiles.length === 0) {
        var para = document.createElement('p');
        para.textContent = 'Aucun fichier sélectionné';
        preview[k].appendChild(para);
      } else {
        var list = document.createElement('ol');
        preview[k].appendChild(list);
        // une troisième boucle pour afficher le resultat du contrôle propre au fichier séléctioné par l'utilisateur (cv, lettre de motivation,etc)
        for(var h = 0; h < curFiles.length; h++) {
          var listItem = document.createElement('li');
          var para = document.createElement('p');

          if(validFileType(curFiles[h])) {
            para.textContent =   curFiles[h].name + ', taille : ' + returnFileSize(curFiles[h].size) + ' : fichier valide';
            listItem.appendChild(para);
            listItem.appendChild(para).classList.add("animated", "fadeIn", "alert-success") ;

          } else {
            para.textContent =  curFiles[h].name + ' : Le fichier sélectionné ne respecte pas le format demandé.';
            listItem.appendChild(para);
            listItem.appendChild(para).classList.add("animated", "fadeIn", "alert-danger") }
            list.appendChild(listItem);
          }
        }
      }
    }

    var fileTypes = [ 'application/pdf'];
    // un 4ème boucle pour parcourir le type de fichier autorisé
    // ici le pdf...Nous pourions ajouter à l'avenir un .docs par exemple
    function validFileType(file) {
      for(var j = 0; j< fileTypes.length; j++) {
        if(file.type === fileTypes[j]) {
          return true;
        }
      }
      return false;
    }

// fonction qui retourne la taille du fichier selon le nombre d'octets
function returnFileSize(number) {
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}

}