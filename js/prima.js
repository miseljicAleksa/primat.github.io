
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }



    // radno vreme

      function myFunction() {
        var myWindow = window.open("", "понедељак: 8:00 - 20:00", 
        "utorak: 8:00 - 20:00", 
        "sreda: 8:00 - 20:00", 
        "cetvrtak: 8:00 - 20:00", 
        "petak: 8:00 - 20:00", 
        "subota: 8:00 - 15:00",
        "nedelja: zatvoreno",
        "width=200,height=100");
        myWindow.document.write("<p>понедељак: 08:00 – 20:00</p>");
        myWindow.document.write("<p>уторак:08:00 – 20:00</p>");
        myWindow.document.write("<p>среда:08:00 – 20:00</p>");
        myWindow.document.write("<p>четвртак:08:00 – 20:00</p>");
        myWindow.document.write("<p>петак:08:00 – 20:00</p>");
        myWindow.document.write("<p>субота:08:00 – 15:00</p>");
        myWindow.document.write("<p>недеља:  ЗАТВОРЕНО</p>");

        
      }          