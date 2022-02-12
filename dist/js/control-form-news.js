// mise en style des champs obligatoire avec css animate et js **/
var spanError = "<span class='animated fadeIn alert-danger' style='padding:5px'><i class='fa fa-times-circle'></i>";


// mise en style des non champs obligatoires avec css animate et js **/
var spanWarning = "<span class='animated fadeIn alter-warning' style='padding:5px'><i class='fa fa-check-circle'></i>";


// mise en style en cas de champ valide //
var spanSuccess = "<span class='animated fadeIn alert-success' style='padding:5px'><i class='fa fa-check-circle'></i> Champ valide";

var spanClose="</span>";

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


// appel des fonctions 
document.getElementById("email").addEventListener("input", checkEmail);





