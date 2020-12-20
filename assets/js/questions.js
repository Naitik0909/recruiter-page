
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

$(".btn-group > button.btn").on("click", function(){
    score = Number(this.innerHTML);
});

$('#question1').append(questions[0].question);

function getNextQuestion(){
  comment = document.forms["q1-form"]["q1"].value;

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
  i+=1;
  $('#question2').append(questions[i].question);
  var param = 'q'+String(i+1);
  showContent(param);

}
