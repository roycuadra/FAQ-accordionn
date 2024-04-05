const questions = document.querySelectorAll(".question-box");
const questionButtons = document.querySelectorAll(".btn ");

questionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const questionBox = e.target.closest(".question-box");
    if (questionBox) {
      console.log(questionBox);
      questions.forEach((question) => question.classList.remove("active"));
      questionBox.classList.add("active");
      console.log(questionBox);
    }
  });
});
