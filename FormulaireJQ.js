
$(document).ready(function(){

var Exp1 = new RegExp("^[a-zA-Z '-]{1,}$");
var Exp2 = new RegExp("^[a-zA-Z0-9 '-.]{1,}$");
var Cod = new RegExp("^[0-9]{5}$");
var Mail = new RegExp("^[a-z0-9]{2,}(([_.-]?)[a-z0-9])*([@]{1})[a-z0-9]{2,}(([_.-]?)[a-z0-9])*([.]{1})[a-z]{2,5}$");
var Tel = new RegExp("^[0-9-/]{10,14}$");
//var Tel = new RegExp("^[0-9]{2}([.-/]?)[0-9]{2}([.-/]?)[0-9]{2}([.-/]?)[0-9]{2}([.-/]?)[0-9]{2}")


//var Choix  = document.querySelector('#Choisir');

    // Vérification Société +++++++++++++++++++++++++++++++++++++++++++++++++
    $("#Societe").focusout(function (){
        if(Exp1.test($("#Societe").val())== false){
            alert("Vérifiez le nom de votre société");
            $("#Societe").focus();
            $("#Societe").css('background-color','red');
        }
        else {
            $("#Societe").css('background-color','white');
        }
    });


    // Vérification Contact +++++++++++++++++++++++++++++++++++++++++++++++++
    $("#Contact").focusout(function (){
        if(Exp1.test($("#Contact").val())== false){
            alert("Vérifiez le nom de la personne à contacter");
            $("#Contact").focus();
            $("#Contact").css('background-color','red');
        }
        else {
            $("#Contact").css('background-color','white');
        }
    });

    // Vérification Ville +++++++++++++++++++++++++++++++++++++++++++++++++
    $("#Ville").focusout(function (){
        if(Exp1.test($("#Ville").val())== false){
            alert("Vérifiez la ville");
            $("#Ville").focus();
            $("#Ville").css('background-color', 'red');
        }
        else{
            $("#Ville").css('background-color','white');
        }
    });

    // Vérification Adresse ++++++++++++++++++++++++++++++++++++++++++++++
    $("#Adresse").focusout(function(){
        if(Exp2.test($("#Adresse").val())== false){
            alert("Vérifiez l'adresse");
            $("#Adresse").focus();
            $("#Adresse").css("background-color", "red");
        }
        else{
            $("#Adresse").css("background-color","white");
        }
    });

    // Vérification Code Postal +++++++++++++++++++++++++++++++++++++++++
    $("#CodPos").focusout(function(){
        if(Cod.test($("#CodPos").val())== false){
            alert("Vérifiez le code postal");
            $("#CodPos").focus();
            $("#CodPos").css("background-color","red");
        }
        else{
            $("#CodPos").css("background-color","white");
        }
    });

    // Vérification E-Mail +++++++++++++++++++++++++++++++++++++++++++++
    $("#Mail").focusout(function(){
        if(Mail.test($("#Mail").val())== false){
            alert("Vérifiez l'adresse mail");
            $("#Mail").focus();
            $("#Mail").css("background-color","red");
        }
        else{
            $("#Mail").css("background-color","white");
        }
    });


    // Vérification Téléphone+++++++++++++++++++++++++++++++++++++++++
    $("#Phone").focusout(function(){
       if(Tel.test($("#Phone").val())== false){
           alert("Vérifiez le numéro de téléphone");
           $("#Phone").focus();
           $("#Phone").css("background-color","red");
       }
        else{
           $("#Phone").css("background-color","white");
       }
    });

    // Action du ComboBox et du TextArea ++++++++++++++++++++++++++++++++++
    $("#Choisir").change(function() {
        $("#Techniq").val($("#Techniq").val() + $("#Choisir").val() + "\n");
    });


});