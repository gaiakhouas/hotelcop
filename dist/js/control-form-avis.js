// mise en style des champs obligatoire avec css animate et js **/
var spanError = "<span class='animated fadeIn alert-danger' style='padding:5px'><i class='fa fa-times-circle'></i>";


// mise en style des non champs obligatoires avec css animate et js **/
var spanWarning = "<span class='animated fadeIn alter-warning' style='padding:5px'><i class='fa fa-check-circle'></i>";


// mise en style en cas de champ valide //
var spanSuccess = "<span class='animated fadeIn alert-success' style='padding:5px'><i class='fa fa-check-circle'></i> Champ valide";


var spanClose="</span>";

// Ci-dessous les fonctions de contrôles pour les champs obligatoires

function checkName(){
  var str=document.getElementById("nom").value; 
 

var msg="";
if(str.length<2){
  document.getElementById("warning-nom").innerHTML=spanError+" Veuillez saisir au moins deux caractères."+spanClose;

}
else{
  document.getElementById("warning-nom").innerHTML=spanSuccess+spanClose;
}

}

function checkFirstName(){
  var str=document.getElementById("prenom").value; 

// on teste quel le nom du cham

var msg="";
if(str.length<2){
  document.getElementById("warning-prenom").innerHTML=spanError+"Veuillez saisir au moins deux caractères."+spanClose;

}
else{
  document.getElementById("warning-prenom").innerHTML=spanSuccess+spanClose;
}

}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkEmail() {
  var result = document.getElementById("warning-email");
  var email = document.getElementById("email");
  result.innerHTML="";

  if (validateEmail(email.value)) {
    result.innerHTML=spanSuccess+spanClose; 

  } else {
    result.innerHTML=spanError+" L'email n'est pas valide"+spanClose; 

  }

  return false;
}


function checkMsg(){
  var str=document.getElementById("msg").value; 


  var msg="";
  if(str.length<10){
    document.getElementById("warning-msg").innerHTML=spanError+" Veuillez renseigner un message d'au moins 10 caractères"+spanClose;

  }
  else{
    document.getElementById("warning-msg").innerHTML=spanSuccess+spanClose; 
  }

}

function checkCat(){
  var str=document.getElementById("categorie"); 

// on teste la categorie

var msg="";
if(str.value==""){
  document.getElementById("warning-categorie").innerHTML=spanError+"Veuillez saisir une catégorie"+spanClose;

}
else{
  document.getElementById("warning-categorie").innerHTML=spanSuccess+spanClose;
}

}

/** à finir
function addAvis(){
  var nom=document.getElementById("nom");
  var prenom=document.getElementById("prenom");
  var cat=document.getElementById("categorie");
  var avis=document.getElementById("msg");
  var AvisComplet="test";

  document.getElementById("addHere").innerHTML="<div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'></div>";


}

**/

// fin fonctions champs obligatoires

// appel des fonctions 
document.getElementById("nom").addEventListener("input", checkName);
document.getElementById("prenom").addEventListener("input", checkFirstName);
document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("categorie").addEventListener("change", checkCat);
document.getElementById("msg").addEventListener("input", checkMsg);
//document.getElementById("envoiAvis").addEventListener("click", addAvis);







