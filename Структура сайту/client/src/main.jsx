import App from "./App.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error('Не знайдено кореневий елемент "#root" для запуску застосунку.');
}

root.innerHTML = App();