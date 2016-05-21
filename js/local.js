$(window).load(function(){
    //$('#mymodal').modal('show');
    load("acceuil");
}); 
/*function getPageContent(pageName){
    $.ajax({
        url: "page/" + pageName + ".sheep",
        context: document.body
        }).done(function(data) {
            $( "#pageContent" ).html(data);
        });
} */ 
function load(pageName){
    $( "#pageContent" ).html('<center><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></center>');
    $( "#pageContent" ).load( "page/" + pageName + ".sheep" ,function() {
        if(pageName == "rapport"){
            initMap();
        }
    });       
}    
$(".nav a").on("click", function() {
    $(".nav a").removeClass("active");
    $(this).addClass("active");
}); 
function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 48.739518, lng: 6.322192},
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.SATELLITE
        });

  var marker = new google.maps.Marker({
    position: {lat: 48.739518, lng: 6.322192},
    map: map,
    title: 'la Bouzule'
  });
}    