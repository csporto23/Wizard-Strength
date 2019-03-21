let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
let item = Math.floor(Math.random() * (12) + 1);

$("#StartGame").on("click", function () {
    const totalReset = 0;
    $("#RandomNumber").text(random);
    $("#TotalScore").text(totalReset);    
});

$("#items").on("click", function () {
    $("#TotalScore").text(item);
})

if (item === random){
    console.log("Winner!");
} else (item > random) {
    console.log("loser!");
}


if (item < random) {
    console.log("trigger")
} else (item === random) {
    console.log("trigger");
}