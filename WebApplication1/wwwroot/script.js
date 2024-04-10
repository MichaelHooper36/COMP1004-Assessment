var arr1 = ["#Giant", "#Jormungand", "#Sif", "#Mjollnir", "#Asgard", "#Winter", "#Loki", "#Ragnarok"];
function randSite1() {
    location.href = arr1[Math.floor(Math.random() * arr1.length)];
}

var arr2 = ["#Minotaur", "#Theseus", "#Athens", "#Deadalus", "#Wings"];
function randSite2() {
    location.href = arr2[Math.floor(Math.random() * arr2.length)];
}