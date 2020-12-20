

function getIcon(score){
  var icon = null;
  if (score == "5"){
    icon = '<i style="color: yellowgreen;" class="fas fa-check-double"></i>';
  }

  else if(score == "4"){
    icon = '<i style="color: yellowgreen;" class="fas fa-check"></i>'
  }

  else if(score == "3"){
    icon = '<i style="color: salmon;" class="fas fa-minus"></i>';
  }

  else if(score == "2"){
    icon = '<i style="color: red;" class="fas fa-minus"></i>';
  }

  else{
    icon = '<i style="color: red;" class="fas fa-minus"></i>'
  }

  return icon;

}

// CALLED ON PRESSING RESULT BUTTON

function getResult(){

  alert("Scroll below to see results.");

  var total_score = 0;
  $('#result-section').css('display', 'inline');

// LOOP TO ITERATE THROUGH QUESTIONS

  for (var k=0; k<3; k++){
    var question = "Q"+String(k+1)+". ";
    question += questions[k].question;

    var score = String(questions[k].score);

    var icon = getIcon(score);


    total_score+=Number(score);
    score += "/5";

// APPEND NEW ROW TO THE RESULT TABLE

    var comment = questions[k].comment;
    var newRow = '<tr><td>'+ question +'</td><th scope="row">'+ icon+"  "+score +'</th><td>'+ comment +'</td></tr>';
    $('.table tr:last').after(newRow);
  }


// RESULT CHART

  var ctx = document.getElementById("resultChart").getContext('2d');
  var resultChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Marks obtained"],
      datasets: [{
        backgroundColor: [
          "#06DB5E",
          '#E82D2D'
        ],
        data: [total_score, (15-total_score)]
      }]
    },

  });
}
