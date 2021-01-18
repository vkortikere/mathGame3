function backToLogin(){
    window.location= "index.html";
}
function addUser(){
 
    var player1_name = document.getElementById("player1_name_input").value;
    var player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);
    window.location = "Quiz.html";
    document.getElementById("player1_name").innerHTML = player1_name;
    document.getElementById("player2_name").innerHTML = player2_name;

}
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    real_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_check_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check</button>";
    console.log(number1, number2);

    row = question_number + input_check_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}