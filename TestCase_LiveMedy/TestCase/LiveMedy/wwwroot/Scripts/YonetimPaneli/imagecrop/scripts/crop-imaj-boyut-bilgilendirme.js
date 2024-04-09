$(document).ready(function () {

    var fotoEkleLinki =   $(".simple-cropper-images a");
    var text = $(fotoEkleLinki).text();   
    var genislik = $(".simple-cropper-images .cropme").width();   
    var yukseklik = $(".simple-cropper-images .cropme").height();
    var yeniText = text + " (" + genislik + "*" + yukseklik + ")";
    $(fotoEkleLinki).text(yeniText);
   

})