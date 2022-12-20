const input = document.getElementById('input');
const button = document.getElementById('btn-submit');
const container = document.getElementById('container');

const Pizzas = [
  {
    id: 1,
    nombre: "Especial",
    precio: 2000,
    ingredientes: ["jamon", "queso", "huevo"],
  },
  {
    id: 2,
    nombre: "Mozzarella",
    precio: 2100,
    ingredientes: ["queso", "aceitunas"],
  },
  {
    id: 3,
    nombre: "Pepperoni",
    precio: 2200,
    ingredientes: ["pepperoni", "queso", "albahaca", "huevo"],
  },
  {
    id: 4,
    nombre: "Champiñones",
    precio: 2050,
    ingredientes: ["jamon", "queso", "huevo", "champiñones"],
  },
  {
    id: 5,
    nombre: "Hawaiana",
    precio: 1900,
    ingredientes: ["queso", "huevo", "ananá"],
  },
  {
    id: 6,
    nombre: "Marinera",
    precio: 500,
    ingredientes: ["cebolla", "ajo", "queso", "tomate"],
  },
];

button.addEventListener('click', (e) => {
  e.preventDefault()
  let inputValue = input.value

  container.innerHTML = '';

  Pizzas.forEach((e) => { 
    
    const pizzaName = document.createElement('h2');
    pizzaName.textContent = 'Pizza '+e.nombre;
    const pizzaPrice = document.createElement('h3');
    pizzaPrice.textContent = '$'+e.precio;
    
    if(e.id == inputValue){
    container.appendChild(pizzaName);
    container.appendChild(pizzaPrice);
    }});

  const pizzaNotFound = document.createElement('h2');
  pizzaNotFound.textContent = 'Esta pizza no existe';

  if(inputValue > Pizzas.length) container.appendChild(pizzaNotFound)});