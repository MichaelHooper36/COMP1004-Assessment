var arr1 = ["#Giant", "#Jormungand", "#Sif", "#Mjollnir", "#Asgard", "#Winter", "#Loki", "#Ragnarok"];
function randSite1() {
    location.href = arr1[Math.floor(Math.random() * arr1.length)];
}