const schemePlaces = document.querySelector(".places__scheme-img");
const place = document.querySelector(".place");

schemePlaces.addEventListener("click", () => {
  place.classList.toggle('place_opened');
});
