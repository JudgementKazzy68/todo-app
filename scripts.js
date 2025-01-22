"use strict";

const listMain = document.querySelector(".list-main");
const inputField = document.querySelector(".input-field");
let listItems = document.getElementsByTagName("li");
let checkBoxes = document.getElementsByClassName("complete-task");

function addItem() {
  const li = document.createElement("li");
  const nav = document.createElement("nav");
  const checkBox = document.createElement("input");
  const div = document.createElement("div");
  listMain.appendChild(li);
  li.appendChild(nav);
  nav.classList.add("list-item");
  nav.appendChild(checkBox);
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-task");
  checkBox.addEventListener("click", function () {
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked === true) {
        listItems[i].remove();
      }
    }
  });
  nav.appendChild(div);
  div.textContent = inputField.value;
  inputField.value = "";
  console.log(checkBoxes);
}

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
