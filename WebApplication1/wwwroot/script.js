var arr1 = ["#Giant", "#Jormungand", "#Sif", "#Mjollnir", "#Asgard", "#Winter", "#Loki", "#Ragnarok"];
var nam1 = ["Giant", "Jormungand", "Sif", "Mjollnir", "Asgard", "Winter", "Loki", "Ragnarok"];
function randSite1() {
    var rand1 = Math.floor(Math.random() * arr1.length);
    location.href = arr1[rand1];
    document.getElementById(nam1[rand1]).classList.remove("hidden");
    document.getElementById(nam1[rand1]).classList.add("show");
}

var arr2 = ["#Minotaur", "#Theseus", "#Athens", "#Deadalus", "#Wings"];
var nam2 = ["Minotaur", "Theseus", "Athens", "Daedalus", "Wings"];
function randSite2() {
    var rand2 = Math.floor(Math.random() * arr2.length)
    location.href = arr2[rand2];
    document.getElementById(nam2[rand2]).classList.remove("hidden");
    document.getElementById(nam2[rand2]).classList.add("show");
}

var arr3 = [];
var nam3 = [];
function randSite3() {
    rand3 = Math.floor(Math.random() * arr3.length)
    location.href = arr3[rand3];
    document.getElementById(nam3[rand3]).classList.remove("hidden");
    document.getElementById(nam3[rand3]).classList.add("show");
}

function giantFunc() 
{
    document.getElementById("Giant").classList.remove("hidden");
    document.getElementById("Giant").classList.add("show");
}

function jormunFunc() 
{
    document.getElementById("Jormungand").classList.remove("hidden");
    document.getElementById("Jormungand").classList.add("show");
}

function sifFunc() 
{
    document.getElementById("Sif").classList.remove("hidden");
    document.getElementById("Sif").classList.add("show");
}

function mjollFunc() 
{
    document.getElementById("Mjollnir").classList.remove("hidden");
    document.getElementById("Mjollnir").classList.add("show");
}

function asgardFunc() 
{
    document.getElementById("Asgard").classList.remove("hidden");
    document.getElementById("Asgard").classList.add("show");
}

function winterFunc() 
{
    document.getElementById("Winter").classList.remove("hidden");
    document.getElementById("Winter").classList.add("show");
}

function lokiFunc() 
{
    document.getElementById("Loki").classList.remove("hidden");
    document.getElementById("Loki").classList.add("show");
}

function ragnaFunc() 
{
    document.getElementById("Ragnarok").classList.remove("hidden");
    document.getElementById("Ragnarok").classList.add("show");
}

function minoFunc() 
{
    document.getElementById("Minotaur").classList.remove("hidden");
    document.getElementById("Minotaur").classList.add("show");
}

function theseFunc() 
{
    document.getElementById("Theseus").classList.remove("hidden");
    document.getElementById("Theseus").classList.add("show");
}

function atheFunc() 
{
    document.getElementById("Athens").classList.remove("hidden");
    document.getElementById("Athens").classList.add("show");
}

function daedaFunc() 
{
    document.getElementById("Daedalus").classList.remove("hidden");
    document.getElementById("Daedalus").classList.add("show");
}

function wingsFunc() 
{
    document.getElementById("Wings").classList.remove("hidden");
    document.getElementById("Wings").classList.add("show");
}