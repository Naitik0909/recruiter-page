
// TO STORE INFORMATION OF QUESTIONS AND RESPONSES

class Question{
  constructor(question, answer_link, score, comment){
    this.question = question;
    this.answer_link = answer_link;
    this.score = score;
    this.comment = comment
  }
}

// INITIALIZING AN ARRAY OF 3 DUMMY QUESTIONS

let questions = [
  new Question(
    'What is Javascript?',
    'https://www.youtube.com'
  ),
  new Question(
    'What is JQuery?',
    'https://www.youtube.com'
  ),
  new Question(
    'Why do we use Javascript?',
    'https://www.youtube.com'
  ),

];
