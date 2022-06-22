const scheme = document.querySelector(".sectors__scheme-img");
const sector = document.querySelector(".sector");
const close = document.querySelector(".sector__close");

// Мобильная версия
const itemScheme = document.querySelector(".sectors__item_name_scheme");
const itemTable = document.querySelector(".sectors__item_name_table");

const blockScheme = document.querySelector(".sectors__block_name_scheme");
const blockTable = document.querySelector(".sectors__block_name_table");

scheme.addEventListener("click", () => {
  sector.style.display = "block";
});

close.addEventListener("click", () => {
  sector.style.display = "none";
});

itemTable.addEventListener("click", () => {
  if (!itemTable.classList.contains("active")) {
    itemScheme.classList.remove("active");
    blockScheme.classList.remove("active");

    itemTable.classList.add("active");
    blockTable.classList.add("active");
  }
});

itemScheme.addEventListener("click", () => {
  if (!itemScheme.classList.contains("active")) {
    itemTable.classList.remove("active");
    blockTable.classList.remove("active");

    itemScheme.classList.add("active");
    blockScheme.classList.add("active");
  }
});
