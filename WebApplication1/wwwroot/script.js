var arr1 = ["#Giant", "#Jormungand", "#Sif", "#Mjollnir", "#Asgard", "#Winter", "#Loki", "#Ragnarok"];
function randSite1() {
    location.href = arr1[Math.floor(Math.random() * arr1.length)];
}

var arr2 = ["#Minotaur", "#Theseus", "#Athens", "#Deadalus", "#Wings"];
function randSite2() {
    location.href = arr2[Math.floor(Math.random() * arr2.length)];
}

var arr3 = [];
function randSite3() {
    location.href = arr3[Math.floor(Math.random() * arr3.length)];
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