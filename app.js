//Create an Ajax request such that when you click the “load text” 
//button, the included text file’s text is loaded into the <div> provided in the index.html.

var button = document.getElementById("loadtext");
button.addEventListener("click", callback);

function callback() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", update);
    request.open("GET", "text.txt");
    request.send();
    
    function update() {
        var div = document.getElementById("text");
        div.innerHTML = request.responseText;
        console.log(request.responseText);
    }
}
//Create an Ajax request such that when you click the 
//“load HTML” button, the included HTML file’s markup is 
//loaded into the <div> provided in the index.html. 
//HINT: .innerHTML() EXTRA CREDIT: load the HTML file 
//as an HTML DOM instead of a string: 

var button2 = document.getElementById("loadhtml");
button2.addEventListener("click", callback2);

function callback2() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", function() {
        var div = document.getElementById("html");
        div.innerHTML = request.responseText;
        });
    request.open("GET", "html.html");
    request.send();
    }
    
var button3 = document.getElementById("loadjson");
button3.addEventListener("click", callback3);

function callback3() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", update3); 
    request.open("GET", "animals.json");    
    request.send();
    
    function update3() {
        var response;
        var div = document.getElementById("json");
        var htmlString = "";
        response = JSON.parse(request.responseText);
        htmlString += "<ul>";
        for (var i = 0; i < response.fuzzy.length; i++) {
            htmlString += "<li>" + response.fuzzy[i] + "</li>";
        }
        htmlString += "</ul>";
        for (var j = 0; j < response.spiky.length; j++) {
            htmlString += "<li>" + response.spiky[j] + "</li>";
        }
        htmlString += "</ul>";
        div.innerHTML = htmlString;
    }
}

