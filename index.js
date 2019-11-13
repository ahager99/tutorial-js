"use strict";
let age = 33;

function run(param) {
    
    console.log("Ich bin X Jahre alt: " + param);
}
run(age);

// ------------------

let summe = function(a,b) {
    return a + b;
}

let ergebnis = summe(1, 22);
console.log(ergebnis);

// --------------------

let f = function(callback) {
    console.log(callback(5,5));
}

f(summe);

// ----------------------

console.log("");
console.log("Countdown:")

setTimeout(function() {
    console.log("1...");
}, 4000);

setTimeout(function() {
    console.log("2...");
}, 2000);

console.log("3...");

/* ----------------------

let counter = 0;
setInterval(() => {
    counter++;
    console.log(counter);
}, 1000);
*/

// -------------


let testcnt = 0;
window.addEventListener("load", function() {

    
    // Klick mich
    let btntest = document.getElementById("btntest");
    this.document.getElementById("clickme").addEventListener(
        "click", 
        function() {
            console.log("Button clickme gedrueckt");

            testcnt++;
            btntest.innerText = "Test " + testcnt;

            switch (testcnt % 3) {
                case 0:
                        btntest.classList.remove("hide");
                        btntest.classList.replace("yellowBgColor", "whiteBgColor");
                        break;
                case 1:
                        btntest.classList.replace("whiteBgColor", "yellowBgColor");
                        break;
                default:
                        btntest.classList.add("hide");
        }
    });

    // Überschrift
    let boxHeader = document.getElementById("box__header");
    let boxContent = document.getElementById("box__content");
    let boxIndicator = document.getElementById("box__indicator");
    boxHeader.addEventListener("click",
    function() {
        boxContent.classList.toggle("hide");
        boxIndicator.classList.toggle("hide");
    });

    // Panels
    this.document.getElementById("btnAllPanelYellow").addEventListener(
        "click", 
        () => {
            var list = this.document.querySelectorAll(".panel h3.alert");
            [].forEach.call(list, (node) => {
                node.classList.toggle("yellowBgColor");
                node.classList.remove("redBgColor");
            });
        });
    this.document.getElementById("btnTestPanelRed").addEventListener(
        "click", 
        () => {
            var node = this.document.querySelector(".panel h3.alert[anyparam='test']");
            if (node != null) {
                node.classList.toggle("redBgColor");
                node.classList.remove("yellowBgColor");     
            }

        }
    );
});



// --------------------------