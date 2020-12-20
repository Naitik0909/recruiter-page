

function getResult(){
  var total_score = 0
  $('#result-section').css('display', 'inline');
  for (var k=0; k<3; k++){
    var question = "Q"+String(k+1)+". ";
    question += questions[k].question;

    var score = String(questions[k].score);
    total_score+=Number(score);
    score += "/5";

    var comment = questions[k].comment;
    var newRow = '<tr><td>'+ question +'</td><th scope="row">'+ score +'</th><td>'+ comment +'</td></tr>';
    $('.table tr:last').after(newRow);
  }


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
