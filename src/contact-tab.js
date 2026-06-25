export function createContactTab() {
  const heading = document.createElement("h2");
  heading.innerText = "Contact us";

  const text = document.createElement("p");
  text.innerText =
    "If you need anything or have any type of doubt feel free to contact us !";

  const contacts = document.createElement("div");

  const telephone = document.createElement("p");
  telephone.innerText = "(555) 555-5555";
  const email = document.createElement("p");
  email.innerText = "odinbakerytrustfulemail@notfake.com";

  contacts.append(telephone, email);

  return [heading, text, contacts];
}
