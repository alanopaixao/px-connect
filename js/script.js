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

// carrousel
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items[currentItem].classList.add("current-item");
  });
});
