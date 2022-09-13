// Business Logic
function add(number1, number2) {
    return (number1 + number2);
}
function subtract(number1, number2) {
    return (number1 - number2);
}
function multiply(number1, number2) {
    return (number1 * number2);
}
function divide(number1, number2) {
    return (number1 / number2);
}

// User Interface Logic
$(document).ready(function () {
    $("#one").click(function () {
        let number1 = parseInt($("#no1").val());
        let number2 = parseInt($("#no2").val());
        let result1 = add(number1, number2);
        $("#display").text(result1);

    })


    $("#two").click(function () {
        let number1 = parseInt($("#no1").val());
        let number2 = parseInt($("#no2").val());
        let result2 = subtract(number1, number2);
        $("#display").text(result2);
    })


    $("#three").click(function () {
        let number1 = parseInt($("#no1").val());
        let number2 = parseInt($("#no2").val());
        let result3 = multiply(number1, number2);
        $("#display").text(result3);
    });


    $("#four").click(function () {
        let number1 = parseInt($("#no1").val());
        let number2 = parseInt($("#no2").val());
        let result4 = divide(number1, number2);
        $("#display").text(result4);
    });
});
