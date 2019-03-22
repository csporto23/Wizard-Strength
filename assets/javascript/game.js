let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
let userScore = 0;
$("#StartGame").on("click", function () {
    
    // const totalReset = 0;
    $("#RandomNumber").text(random);
    $("#TotalScore").html(userScore);    
});

$("#banana").bind("click", function () {
    let item = Math.floor(Math.random() * (12) + 1);
    userScore += item;
    $("#TotalScore").html(userScore);
})

if (item === random) {
    console.log("winner!");
} else {
    console.log("loser!");
}