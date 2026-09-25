function setupActiveBtn(sectionIndex, typeBtn) {
  let section = document.querySelectorAll(".section")[sectionIndex];
  let buttons = document.querySelectorAll(typeBtn);

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      if (btn.dataset.style) {
        document
          .querySelector(".card-preview")
          .classList.remove("light", "dark", "party");
        document
          .querySelector(".card-preview")
          .classList.add(btn.dataset.style);
      } else if (btn.dataset.emoji) {
        document.querySelector(".card-emoji").textContent = btn.textContent;
      }
    });
  });
}

setupActiveBtn(0, ".style-btn");
setupActiveBtn(1, ".emoji-btn");

document
  .querySelector(".card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector(".name-input").value;
    let text = document.querySelector(".text-input").value;
    if (name === "" || text === "") {
      document.querySelector(".message").textContent = "Заполните все поля";
    } else {
      document.querySelector(".message").textContent = "";
      document.querySelector(".card-name").textContent = name;
      document.querySelector(".card-text").textContent = text;
    }
  });

