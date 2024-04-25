fetch("/src/components/Header.html")
  .then((res) => res.text())
  .then((data) => {
    const header = document.querySelector("header");
    header.innerHTML = data;
    return import("/src/js/header.js");
  })
  .catch((error) => {
    console.error(error);
  });

fetch("/src/components/Footer.html")
  .then((res) => res.text())
  .then((data) => {
    const footer = document.querySelector("footer");
    footer.innerHTML = data;
  });
