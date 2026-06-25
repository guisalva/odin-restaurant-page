import bakeryImg from "./assets/bakery.jpg";

export function createHomeTab() {
  content.innerHTML = "";

  const heading = document.createElement("h2");
  heading.innerText = "Welcome to Odin Bakery";

  const img = document.createElement("img");
  img.src = bakeryImg;
  img.alt = "bread and coffe";
  img.width = 300;

  const text = document.createElement("p");
  text.innerText =
    "At Odin Bakery, every loaf, pastry, and cake is crafted with passion,tradition, and the finest ingredients. From the moment you walkthrough our doors, you'll be greeted by the irresistible aroma of freshly baked bread and sweet treats made from scratch each day. Odin Bakery is dedicated to making every visit special.";

  const welcome = document.createElement("div");
  welcome.classList.add("welcome-section");
  welcome.append(img, text);

  return [heading, welcome];
}
