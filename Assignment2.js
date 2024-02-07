class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    isCorrectAnswer(choice) {
      return choice === this.answer;
    }
  }
  
  class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.questionIndex = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.questionIndex];
    }
  
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.questionIndex++;
    }
  
    isEnded() {
      return this.questionIndex === this.questions.length;
    }
  }
  
  class User {
    constructor(username) {
      this.username = username;
      this.scoreHistory = [];
    }
  
    updateScore(score) {
      this.scoreHistory.push(score);
    }
  }
  
  // Example usage - Need to be changed //
  const questions = [
    new Question("What is the capital of France?", ["London", "Paris", "Berlin", "Madrid"], "Paris"),
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
  ];
  
  const quiz = new Quiz(questions);
  const user = new User("JohnDoe");
  
  // Quiz logic (simplified for demonstration)
  while (!quiz.isEnded()) {
    const currentQuestion = quiz.getCurrentQuestion();
    // Simulate user answer (replace with actual user interaction)
    const userAnswer = prompt(currentQuestion.text + "\n" + currentQuestion.choices.join("\n"));
    quiz.guess(userAnswer);
  }
  
  alert("Quiz ended! Your score: " + quiz.score);
  user.updateScore(quiz.score);
  