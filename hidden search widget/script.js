const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const formEL = document.querySelector(".form");

function onSubmit(e) {
  e.preventDefault();
  const { value } = input;
  if (value !== "") {
    window.open(`https://www.google.com/search?q=${value}`);
  }
}

formEL.addEventListener("submit", onSubmit);

search.addEventListener("mouseenter", () => {
  search.classList.add("active");
  input.focus();
});

