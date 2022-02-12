$(document).ready(function () {

  $("#start").datepicker({
    firstDay: 1,
    changeMonth: true,
    altField: ".datepicker",
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd-mm-yy',
// une restriction est activée pour la date de départ en fonction de la sélection de la date d'arrivée
onSelect: function (date) {
  var date2 = $('#end').datepicker('getDate');
  date2.setDate(date2.getDate());
// pour rajouter un jour en auto : date2.setDate(date2.getDate() + 1);
$('#end').datepicker('setDate', date2);
//sets minDate to dt1 date + 1
$('#end').datepicker('option', 'minDate', date2);       
},
onClose: function () {
  var result = document.getElementById("start");
  var start=document.getElementById("warning-start");
  if (result.value=="") {
    start.innerHTML=spanError+" Séléctionnez une date d'arrivée."+spanClose;
  }
  else{
    start.innerHTML=spanSuccess+spanClose;
  }
}

}).next().insertBefore('');
  $("#end").datepicker({
    firstDay: 1,
    changeMonth: true,
    altField: "#end",
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd-mm-yy',
    onClose: function () {
      var date1 = $('#start').datepicker('getDate');
      var date2 = $('#end').datepicker('getDate');
      var result = document.getElementById("end");
      var end=document.getElementById("warning-end");
      if (date2 <= date1) {
        var minDate = $('#end').datepicker('option', 'minDate');
        $('#end').datepicker('setDate', minDate);
      }

      if (result.value=="") {
        end.innerHTML=spanError+" Séléctionnez une date de départ."+spanClose
      }
      else{
        end.innerHTML=spanSuccess+spanClose;
      }
    }
  }).next().insertBefore('');
});
