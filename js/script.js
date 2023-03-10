// sidebar
function sidebarMenu() {
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
}
sidebarMenu();

// video
function videoBkg() {
  const video = document.querySelector(".video-container");
  video.playbackRate = 0.5;
}
videoBkg();
// velocidade de reprodução 50% da velocidade normal

// questions
function questionsBox() {
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
}
questionsBox();
// carrousel
function carrouselPlans() {
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".card");
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

      items.forEach((card) => card.classList.remove("current-item"));

      items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });

      items[currentItem].classList.add("current-item");
    });
  });
}

carrouselPlans();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
