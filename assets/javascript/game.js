let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
let userScore = 0;
let wins = 0;
let loses = 0;
$("#StartGame").on("click", function () {
    
    // const totalReset = 0;
    $("#RandomNumber").html(random);
    $("#TotalScore").html(userScore);    
});



$("#items").on("click", function () {
    var item = Math.floor(Math.random() * (12) + 1);
    userScore += item;
    $("#TotalScore").html(userScore);
    if ( userScore === random ) {
        reset();
   } 
})

//const reset = function() {
  //  userScore = 0;
    //random = 0;
//}

//if ( userScore === random ) {
  //   reset();
//} 