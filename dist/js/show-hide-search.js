    var btnSearch=document.getElementById("btn-search");
    var search= document.getElementById("search");
    var searchHidden= document.getElementById("search");
    function showHideSearch(){
      if(searchHidden.type=="hidden"){
      // si hidden desactivé
      search.classList.remove("fadeOutUp");
      search.type="search";
      search.setAttribute("placeholder","Rechercher")
      search.focus();
    }
    else{
    // si hidden activé on ajoute une animation de sortie
    search.classList.add("fadeOutUp");
    // compte à rebourd de 1s pour faire l'animation de sortie puis appliquer la fonction hideSearch
    setTimeout(hideSearch, 1000);
  }
}

// function qui modifie le type de l'input en hidden  après 1s
function hideSearch(){
  search.type="hidden";
}
btnSearch.addEventListener("click", showHideSearch);