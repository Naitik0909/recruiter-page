
function showContent(name){
  if (name == 'q1'){

  $('#q2').css('display', 'none');
  $('#q3').css('display', 'none');
  $('#q1').css('display', 'inherit');

}

if (name == 'q2'){

$('#q1').css('display', 'none');
$('#q3').css('display', 'none');
$('#q2').css('display', 'inherit');

}

if (name == 'q3'){

$('#q1').css('display', 'none');
$('#q2').css('display', 'none');
$('#q3').css('display', 'inherit');

}
}

var score = 0;
var i = 0;

for (var j=0;j<3;j++){
  var nextQuestion = "#question"+String(j+1);
  $(nextQuestion).append(questions[j].question);
}

$(".btn-group > button.btn").on("click", function(){
    score = Number(this.innerHTML);
});

function getNextQuestion(){
  var current_form = "q"+String(i+1)+"-form";
  var current_question = "q"+String(i+1);

  comment = document.forms[current_form][current_question].value;

  // VALIDATE COMMENT AND SCORE


  if(comment == ""){
    alert("Please give comment.");
    return null;
  }
  if(score == 0){
    alert("Please give score.");
    return null;
  }


  questions[i].score = score;
  questions[i].comment = comment;

  if(i == 2){
    alert('No more questions! You may analyse the score now. Click on "Analyse Score" button below.');
    $('#final-btn').css('display', 'inline');
    return null;
  }
  i+=1;

  var param = 'q'+String(i+1);
  showContent(param);

}
