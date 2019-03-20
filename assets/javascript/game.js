$("#RandomNumber").on("click", function () {
    let random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $("#RandomNumber").text(random);
    // console.log(random);
});