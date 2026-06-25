import "./styles/styles.css";

import { createHomeTab } from "./home-tab.js";
import { createMenuTab } from "./menu-tab.js";
import { createContactTab } from "./contact-tab.js";

let actualTab = "home";

const header = document.querySelector("header");
const content = document.querySelector("#content");

function handleTabButtonClick(e) {
  const button = e.target.closest("button");

  if (!button || button.dataset.tab === actualTab) return;

  let elements;
  switch (button.dataset.tab) {
    case "home":
      elements = createHomeTab();
      actualTab = "home";
      break;

    case "menu":
      elements = createMenuTab();
      actualTab = "menu";
      break;

    case "contact":
      elements = createContactTab();
      actualTab = "contact";
      break;

    default:
      break;
  }

  renderTabElements(elements);
}

function renderTabElements(elements) {
  content.replaceChildren(...elements);
}

header.addEventListener("click", (e) => handleTabButtonClick(e));

renderTabElements(createHomeTab());
