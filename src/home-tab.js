import "./styles/home-tab.css";

import bakeryImg from "./assets/bakery.jpg";

export function createHomeTab() {
  const heading = document.createElement("h2");
  heading.innerText = "Welcome to Odin Bakery";

  const img = document.createElement("img");
  img.src = bakeryImg;
  img.alt = "bread and coffe";
  img.width = 250;

  const credit = document.createElement("figcaption");
  credit.innerHTML =
    'Photo by Nathan Dumlao on <a href="https://unsplash.com/photos/coffee-surrounded-by-four-baked-breads-z3em1GBRhvY">Unsplash</a>';

  const figure = document.createElement("figure");
  figure.append(img, credit);

  const text = document.createElement("p");
  text.innerText =
    "At Odin Bakery, every loaf, pastry, and cake is crafted with passion,tradition, and the finest ingredients. From the moment you walkthrough our doors, you'll be greeted by the irresistible aroma of freshly baked bread and sweet treats made from scratch each day. Odin Bakery is dedicated to making every visit special.";

  const welcome = document.createElement("div");
  welcome.classList.add("welcome-section");
  welcome.append(figure, text);

  return [heading, welcome];
}
