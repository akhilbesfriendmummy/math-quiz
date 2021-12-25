var player1name=localStorage.getItem("player1");
var player2name=localStorage.getItem("player2");
var player1score=0;
var player2score=0;
document.getElementById("player1_name").innerHTML=player1name+":";
document.getElementById("player2_name").innerHTML=player2name+":";
ocument.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="Question turn-"+player1name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    
    remove_c3=number1+"X"+number2;
    question_word="<h4 id='word_display'>Q. "+remove_c3+"</h4>";
    input_box="<br> Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}