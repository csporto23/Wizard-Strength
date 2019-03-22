let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;

$("#StartGame").on("click", function () {
    
    const totalReset = 0;
    $("#RandomNumber").text(random);
    $("#TotalScore").html(totalReset);    
});

$("#items").bind("click", function () {
    let item = Math.floor(Math.random() * (12) + 1);
    items = item+item+item+item;
    $("#TotalScore").html(item);
})

if (item === random) {
    console.log("winner!");
} else {
    console.log("loser!");
}