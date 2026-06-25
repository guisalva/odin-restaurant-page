import "./styles/contact-tab.css";

export function createContactTab() {
  const heading = document.createElement("h2");
  heading.innerText = "Contact us";

  const contacts = document.createElement("div");
  contacts.classList.add("contacts");

  const text = document.createElement("p");
  text.innerText =
    "Call us or send an email if you need to clear up any doubts!";

  const telephone = document.createElement("p");
  telephone.innerText = "phone: (555) 555-5555";
  const email = document.createElement("p");
  email.innerText = "email: odinbakerytrustfulemail@notfake.com";

  contacts.append(text, email, telephone);

  return [heading, contacts];
}
