// sidebar
const closeBtn = document.querySelector("#close-btn");
const sidebarBtn = document.querySelector("#sidebar-button");
const sidebar = document.querySelector("#sidebar");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
sidebar.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// questions
const questions = document.querySelectorAll(".questions-item button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}
function eventQuestion(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventQuestion);

console.log(questions);
