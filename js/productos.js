// Array de objetos productos
const caracteristicas = [
  {
    nombre: "Titanium",
    motor: 3.0,
    precio: 9800000,
  },
  {
    nombre: "Sel",
    motor: 2.5,
    precio: 9800000,
  },
  {
    nombre: "Ranger",
    motor: 3.2,
    precio: 11290000,
  },
  {
    nombre: "Maverick",
    motor: 2.0,
    precio: 16990000,
  },
  {
    nombre: "Explorer",
    motor: 3.0,
    precio: 12990000,
  },
  {
    nombre: "Territory",
    motor: 1.8,
    precio: 10350000,
  },
];

// Llenando la tabla con los datos de forma dinamica
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Ciclo iterativo para recorrer el array de objetos productos
for (let i = 0; i < caracteristicas.length; i++) {
  cuerpoTabla.innerHTML += `
      <tr class='formatoCeldas'>
        <td>${caracteristicas[i].nombre}</td>
        <td>${caracteristicas[i].motor}</td>
        <td>ARS ${caracteristicas[i].precio}</td>
      </tr>
    `;
}
