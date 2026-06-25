import menuOptions from "./data/menu-options.json" with { type: "json" };

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function createMenuTab() {
  content.innerHTML = "";

  const heading = document.createElement("h2");
  heading.innerText = "Menu";

  const menu = document.createElement("div");

  for (const key in menuOptions) {
    const category = menuOptions[key];

    const elementTitle = document.createElement("h3");
    elementTitle.innerText = key;

    const element = document.createElement("ul");

    category.forEach((option) => {
      const item = document.createElement("li");

      item.innerText = `${formatPrice(option.price)}...${option.name}`;

      element.appendChild(item);
    });

    menu.append(elementTitle, element);
  }

  return [heading, menu];
}
