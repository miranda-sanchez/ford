// Array de objetos paises
const paises = [
  {
    id: "01",
    pais: "Argentina",
  },
  {
    id: "02",
    pais: "Chile",
  },
  {
    id: "03",
    pais: "Uruguay",
  },
  {
    id: "04",
    pais: "Paraguay",
  },
  {
    id: "05",
    pais: "Venezuela",
  },
];

// Llenando select
const pais = document.getElementById("pais");

// Ciclo iterativo para recorrer el array de objetos paises
for (let i = 0; i < paises.length; i++) {
  pais.innerHTML += `
        <option value="${paises[i].id}">${paises[i].pais}</option>
      `;
}
