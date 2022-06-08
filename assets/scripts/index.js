const displayMenu = () => {
  //Create navigation menu element
  const menuMobile = document.createElement("nav");
  menuMobile.id = "mobile-menu-content";

  //Create close button
  const menuMobileDiv = document.createElement("div");
  menuMobileDiv.id = "mobile-menu-open";
  const menuMobileClose = document.createElement("img");
  menuMobileClose.src = "./assets/img/close.svg";
  menuMobileClose.alt = "Fermer le menu";
  menuMobileDiv.appendChild(menuMobileClose);

  //Create menu content based on desktop menu
  const menuMobileList = document.createElement("div");
  document.querySelectorAll("body > header > nav > a").forEach((element) => {
    const menuMobileItem = document.createElement("a");
    menuMobileItem.href = element.href;
    menuMobileItem.innerHTML = element.innerHTML;
    menuMobileList.appendChild(menuMobileItem);
  });

  //Add close button and menu content to menu
  menuMobile.appendChild(menuMobileDiv);
  menuMobile.appendChild(menuMobileList);

  document.body.prepend(menuMobile);

  document
    .querySelector("#mobile-menu-open")
    .addEventListener("click", removeMenu);
};

const removeMenu = () => {
  document.querySelector("#mobile-menu-content").remove();
  document.removeEventListener("click", removeMenu);
};

document
  .querySelector("#mobile-menu-closed")
  .addEventListener("click", displayMenu);
