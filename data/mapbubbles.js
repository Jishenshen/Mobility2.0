/**
 * The actual map data is included via separate file for clarity:
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js
 */

/**
 * Initialize global variables
 */

/*<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js"></script>
*/
var latlong = {
    "EUUNION": {"latitude":51.1657, "longitude":10.4515},
    "EEACOUNTRY": {"latitude":60.4720, "longitude":8.4689},
    "EUCOUNTRY": {"latitude":46.8182, "longitude":8.2275},
    "AF": {"latitude":-8.7832, "longitude":34.5085}, 
    "AS": {"latitude":34.0479, "longitude":100.6197},
    "AUS": {"latitude":-25.2744, "longitude":133.7751},
    "ME": {"latitude":29.2985, "longitude":42.5510},
    "NA": {"latitude":54.5260, "longitude":-105.2551},
    "SA": {"latitude":-8.7832, "longitude":-55.4915}
    //"UK": {"latitude":55.3781, "longitude":-3.4360}
    
  };
  
  /**
   * Initial map data
   */
  var mapData = [
    {"code":"EUUNION" , "name":"Other European Union (EU)", "value":325, "color":"#eea638"},
    {"code":"EEACOUNTRY" , "name":"Other EEA countries", "value":5, "color":"#d8854f"},
    {"code":"EUCOUNTRY" , "name":"Other Europe", "value":40, "color":"#de4c4f"},
    {"code":"AF" , "name":"Africa", "value":35, "color":"#de4c4f"},
    {"code":"AS" , "name":"Asia", "value":165, "color":"#86a965"},
    {"code":"AUS" , "name":"Australia", "value":115, "color":"#d8854f"},
    {"code":"ME" , "name":"Middle East", "value":45, "color":"#8aabb0"},
    {"code":"NA" , "name":"North America", "value":150, "color":"#d8854f"},
    {"code":"SA" , "name":"South America", "value":5, "color":"#d8854f"}
    //{"code":"UK" , "name":"United Kingdom", "value":37, "color":"#eea638"}//37005
  
  ];
  
  /**
   * Values for each of the timeline frames
   */

//2007

var frames = [
//{ "EUUNION":325,
//"EEACOUNTRY":5,
//"EUCOUNTRY":40,
//"AF":35,
//"AS":165,
//"AUS":115,
//"ME":45,
//"NA":150,
//"SA":5
//// "UK":38  //38485
//},

//2008
{ "EUUNION":305,
"EEACOUNTRY":10,
"EUCOUNTRY":35,
"AF":50,
"AS":135,
"AUS":130,
"ME":45,
"NA":155,
"SA":5
// "UK":38  //38485
},

//2009
{ "EUUNION":425,
"EEACOUNTRY":25,
"EUCOUNTRY":60,
"AF":85,
"AS":165,
"AUS":130,
"ME":45,
"NA":225,
"SA":15
// "UK":38  //38485
},

//2010
{ "EUUNION":515,
"EEACOUNTRY":0,
"EUCOUNTRY":85,
"AF":100,
"AS":235,
"AUS":220,
"ME":60,
"NA":220,
"SA":25
// "UK":38  //38485
},

//2011
{ "EUUNION":480,
"EEACOUNTRY":30,
"EUCOUNTRY":55,
"AF":85,
"AS":210,
"AUS":190,
"ME":65,
"NA":240,
"SA":20
// "UK":38  //38485
},

//2012
{ "EUUNION":540,
"EEACOUNTRY":30,
"EUCOUNTRY":70,
"AF":125,
"AS":250,
"AUS":125,
"ME":80,
"NA":275,
"SA":20
// "UK":38  //38485
},

  //2014
  { "EUUNION":545,
  "EEACOUNTRY":20,
  "EUCOUNTRY":60,
  "AF":55,
  "AS":195,
  "AUS":100,
  "ME":100,
  "NA":225,
  "SA":15
 // "UK":38  //38485
},

  //2014
  { "EUUNION":525,
  "EEACOUNTRY":35,
  "EUCOUNTRY":55,
  "AF":65,
  "AS":190,
  "AUS":120,
  "ME":75,
  "NA":260,
  "SA":20
 // "UK":38  //38485
},

  //2015
      { "EUUNION":535,
      "EEACOUNTRY":20,
      "EUCOUNTRY":55,
      "AF":50,
      "AS":175,
      "AUS":80,
      "ME":70,
      "NA":205,
      "SA":10
      //"UK":38},//38485
  },

    //2016
    { "EUUNION":655,
    "EEACOUNTRY":20,
    "EUCOUNTRY":60,
    "AF":55,
    "AS":195,
    "AUS":120,
    "ME":75,
    "NA":260,
    "SA":20
    //"UK":38},//38485
},





  ]
var map;
var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;


/**
 * Get min and max values
 */
for (var i = 0; i < mapData.length; i++) {
    var value = mapData[i].value;
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

/**
 * We are using circle square rather than radius as a size indicator
 * Let's calculate minimum ant maximum squares
 */
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

/**
 * Create the map
 */
AmCharts.ready(function() {
    AmCharts.theme = AmCharts.themes.dark;
    map = new AmCharts.AmMap();
    map.path = "https://www.amcharts.com/lib/3/";

    map.addTitle("STEM graduations overseas migration from 2007-2016 ", 14);
    //map.addTitle("source: Gapminder", 11);
    map.areasSettings = {
        unlistedAreasColor: "#000000",
        unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";

    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        images: []
    }

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[i];
        var value = dataItem.value;
                var size = calcBubbleSize(value);
        var id = dataItem.code;

        dataProvider.images.push({
            id: id,
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value
        });
    }

    map.dataProvider = dataProvider;

    map.write("chartdiv");
});

/**
 * Calculates bullet size based on its value
 */
function calcBubbleSize( value ) {
  var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
  if (square < minSquare) {
    square = minSquare;
  }
  return Math.sqrt(square / (Math.PI * 2));
}

/**
 * The code responsible for animating the motion chart data
 */

// initilize variables
var currentFrame = 0;
var interval;
var speed = 200; // time between frames in milliseconds

// function to start stop
function togglePlay() {
  
  // check if animation is playing (intverla is set)
  if ( interval ) {
    
    // stop playing (clear interval)
    clearInterval( interval );
  }
  else {
    
    // start playing
    interval = setInterval( function () {
      
      // iterate the frame
      currentFrame++;
      
      // check if maybe we need to wrap to frame 0
      if ( currentFrame >= frames.length )
        currentFrame = 0;
      
            // update size of each bubble for the specific frame
      for( var i = 0; i < map.dataProvider.images.length; i++ ) {
        var image = map.dataProvider.images[i];
        image.value = frames[currentFrame][image.id];
        image.width = calcBubbleSize( frames[currentFrame][image.id] );
        //console.log(frames[currentFrame][image.id]);
      }
      map.validateData();
      
      // set frame indicator
      document.getElementById( 'frame' ).innerHTML = currentFrame;
      
    }, speed );
    
  }
}

