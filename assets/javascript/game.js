$("#StartGame").on("click", function () {
    let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $("#RandomNumber").text(random);
    
});






$("#items").on("click", function () {
    let item = Math.floor(Math.random() * (12) + 1);
    console.log(item)
    $("#TotalScore").text(item);
})