"use strict";

const listMain = document.querySelector(".list-main");
const inputField = document.querySelector(".input-field");

function addItem() {
  const li = document.createElement("li");
  const nav = document.createElement("nav");
  const checkBox = document.createElement("input");
  listMain.appendChild(li);
  li.appendChild(nav);
  nav.appendChild(checkBox);
  checkBox.type = "checkbox";
  nav.appendChild(document.createTextNode(inputField.value));
  inputField.value = "";
  nav.classList.add("list-item");
}

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
