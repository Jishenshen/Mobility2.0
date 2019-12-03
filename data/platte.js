$(function () {
    $("#vector-map").dxVectorMap({
        bounds: [-180, 85, 180, -60],
        layers: {
            name: "areas",
            dataSource: DevExpress.viz.map.sources.world,
            palette: "Violet",
            colorGroups: [0, 1, 2, 3, 4, 5,15],
            colorGroupingField: "population",
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    element.attribute("population", populations[element.attribute("name")]);
                });
            }
        },
        legends: [{
            source: { layer: "areas", grouping: "color" },
            customizeText: function (arg) {
                var text;
                if (arg.index === 0) {
                    text = "< 1";
                }
                else if (arg.index === 8) {
                    text = "> 10";
                }
                else {
                    text = arg.start + " %to " + arg.end + "%";
                }
                return text;
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                if (arg.attribute("population")) {
                    return { text: arg.attribute("name") + ": " + arg.attribute("population") + " % overseas employments" };
                }
            }
        }
    });
});

var populations = {
    //Asia
    //"China": 0.46,
    //"India": 0.46,
    //"Malaysia": 0.46,
    //"Japan": 0.46,
    //"Thailand": 0.46,
    //"North Korea": 0.46,
    //"Armenia": 0.46,
    //"Azerbaijan": 0.46,
    //"Bahrain": 0.46,
    //"Bangladesh": 0.46,
    //"Bhutan": 0.46,
    //"Brunei": 0.46,
    //"Cambodia": 0.46,
    //"East Timor": 0.46,
    //"Georgia": 0.46,
    //"Indonesia": 0.46,
    //"Iran": 0.46,
    //"Israel": 0.46,
    //"Jordan": 0.46,
    //"Kazakhstan": 0.46,
    //"Kuwait": 0.46,
    //"Kyrgyzstan": 0.46,
    //"Laos": 0.46,
    //"Lebanon": 0.46,
    //"Maldives": 0.46,
    //"Mongolia": 0.46,
    //"Myanmar": 0.46,
    //"Nepal": 0.46,
    //"Oman": 0.46,
    //
    //"Philippines": 0.46,
    //"Qatar": 0.46,
    //"Saudi Arabia": 0.46,
    //"Singapore": 0.46,
    //"Sri Lanka": 0.46,
    //"Syria": 0.46,
    //"Tajikistan": 0.46,
    //"Turkmenistan": 0.46,
    //"United Arab Emirates": 0.46,
    //"Uzbekistan": 0.46,
    //"Vietnam": 0.46,
    //"Yemen": 0.46,
    //"Russia":0.46,

    //North America
   // "United States": 0.54,
   // "Canada": 0.54,
   // "Mexico": 0.54,
//
   // //South America
   // "Argentina": 0.026,
   // "Bolivia": 0.026,
   // "Brazil": 0.026,
   // "Chile": 0.026,
   // "Colombia": 0.026,
   // "Ecuador": 0.026,
   // "Guyana": 0.026,
   // "Paragua": 0.026,
   // "Peru": 0.026,
   // "Suriname": 0.026,
   // "Uruguay": 0.026,
   // "Venezuela": 0.026,

    //Africa
   // "South Africa": 0.13,
   // "Western Africa": 0.13,
   // "Nigeria": 0.13,
   // "Ethiopia": 0.13,
   // "DR Congo": 0.13,
   // "Tanzania": 0.13,
   // "Kenya": 0.13,
   // "Uganda": 0.13,
   // "Algeria": 0.13,
   // "Sudan": 0.13,
   // "Algeria": 0.13,
   // "Angola": 0.13,
   // "Benin": 0.13,
   // "Botswana": 0.13,
   // "Burkina Faso": 0.13,
   // "Burundi": 0.13,
   // "Cabo Verde": 0.13,
   // "Cameroon": 0.13,
   // "Central African Republic (CAR)": 0.13,
   // "Comoros": 0.13,
   // "Congo, Democratic Republic of the": 0.13,
   // "Congo, Republic of the Cote d'Ivoire": 0.13,
   // "Equatorial Guinea": 0.13,
   // "Eritrea": 0.13,
   // "Eswatini": 0.13,
   // "Gabon": 0.13,
   // " Gambia": 0.13,
   // "Ghana": 0.13,
   // "Guinea": 0.13,
   // "Guinea-Bissau": 0.13,
   // "Lesotho": 0.13,
   // "Liberia": 0.13,
   // "Libya": 0.13,
   // "Madagascar": 0.13,
   // "Malawi": 0.13,
   // "Mali": 0.13,
   // "Mauritania": 0.13,
   // "Mauritius": 0.13,
   // "Morocco": 0.13,
   // "Mozambique": 0.13,
   // "Namibia": 0.13,
   // "Niger": 0.13,
   // "Rwanda": 0.13,
   // "Sao Tome and Principe": 0.13,
   // "Senegal": 0.13,
   // "Seychelles": 0.13,
   // "Sierra Leone": 0.13,
   // "South Africa": 0.13,
   // "Togo": 0.13,
   // "Tunisia": 0.13,
   // "Zambia": 0.13,
   // "Zimbabwe": 0.13,

   ////other European union
   //"Austria":1.4,
   // "Belgium":1.4,
   // "Bulgaria":1.4,
   // "Croatia":1.4,
   // "Cyprus":1.4,
   // "Czech":1.4,
   // "Denmark":1.4,
   // "Estonia":1.4,
   // "Finland":1.4,
   // "France":1.4,
   // "Germany":1.4,
   // "Greece":1.4,
   // "Hungary":1.4,
   // "Ireland":1.4,
   // "Italy":1.4,
   // "Latvia":1.4,
   // "Lithuania":1.4,
   // "Luxembourg":1.4,
   // "Malta":1.4,
   // "Netherlands":1.4,
   // "Poland":1.4,
   // "Portugal":1.4,
   //" Romania":1.4,
   // "Slovakia":1.4,
   // "Slovenia":1.4,
   // "Spain":1.4,
   // "Sweden":1.4,


   ////other eea countries
   //"Iceland": 0.05,
   // "Norway": 0.05,
   // "Liechtenstein":0.05,

   ////other Europe
   //"Switzerland":0.14,

   ////austrialia
   //"Australia":0.21,

   ////middle east
   //"Turkey": 0.18,
   //"Egypt": 0.18,
   //"Chad": 0.18,
   //"Sudan": 0.18,
   //"Djibouti": 0.18,
   //"Somalia": 0.18,
   //"Afghanistan": 0.18,
   //"Pakistan": 0.18,

   ////uk
   //"United Kingdom": 97,

"France":10.4,
"United States":9.3,
"Spain":6.7,
"China":5.6,
"Ireland":5.8,
"Germany":5.4,
"Australia":4.8,
"Arab Emirates": 3.4,
"Canada": 2.8,
"Switzerland":2.7,
"India":1.0,
"Greece":1.5,
//"Poland":0.5,
"South Africa":0.7,
"Saudi Arabia": 0.91,
"Russia":0.5
//7165


};
