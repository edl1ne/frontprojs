// 11.3
document.getElementById("randomize-button").addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * 9) + 1;
    var imagePath = "images/" + randomIndex + ".jpg";
    document.getElementById("random-image").src = imagePath;
});
