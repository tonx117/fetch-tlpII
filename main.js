const ejercicio1 = document.querySelector("#ejer1");
const ejercicio2 = document.querySelector("#ejer2");
const ejercicio3 = document.querySelector("#ejer3");
const ponerImg = document.querySelector("#contenedor3");

// PUNTO 1
const traerInfo = () => {
  fetch(
    "https://pixabay.com/api/?key=38987571-8126a44467b7e2d998619a456&q=yellow+flowers&image_type=photo"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hits[0]);
      console.log(data.hits[1]);
      console.log(data.hits[2]);
    })
    .catch((error) => console.error(error));
};

ejercicio1.addEventListener("click", () => {
  traerInfo();
});

// ejercicio 2
const solicitudPost = (obj) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

ejercicio2.addEventListener("click", () => {
  const objeto = {
    title: "Titulo",
    body: "Cuerpo",
  };
  solicitudPost(objeto);
});

// ejercicio 3
ejercicio3.addEventListener("click", (e) => {
  e.preventDefault();
  traerimagen1();
});

function traerimagen1() {
  fetch(
    "https://pixabay.com/api/?key=38987571-8126a44467b7e2d998619a456&q=yellow+flowers&image_type=photo"
  )
    .then((response) => response.json())
    .then((data) => {
      imagen(data.hits[0]);
    })
    .catch((error) => console.error(error));
}

function imagen(imagen1) {
  const img = document.createElement("img");
  img.src = imagen1.webformatURL;
  const div = document.createElement("div");
  div.appendChild(img);
  ponerImg.appendChild(div);
}
