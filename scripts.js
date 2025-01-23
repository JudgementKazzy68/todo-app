"use strict";

const listMain = document.querySelector(".list-main");
const inputField = document.querySelector(".input-field");
let listItems = document.getElementsByTagName("li");
let checkBoxes = document.getElementsByClassName("complete-task");
let deleteButtons = document.getElementsByClassName("btn-delete");

function appendItem() {
  const li = document.createElement("li");
  const nav = document.createElement("nav");
  const checkBox = document.createElement("input");
  const div = document.createElement("div");
  let button = document.createElement("button");
  listMain.appendChild(li);
  li.appendChild(nav);
  nav.classList.add("list-item");
  nav.appendChild(checkBox);
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-task");
  checkBox.addEventListener("click", function () {
    div.classList.toggle("completed");
  });
  nav.appendChild(div);
  div.textContent = inputField.value;
  nav.appendChild(button);
  button.textContent = "🚫";
  button.classList.add("btn-delete");
  button.addEventListener("click", function () {
    button.parentNode.parentNode.remove();
  });
  inputField.value = "";
}

function popItem() {
  const li = document.createElement("li");
  const nav = document.createElement("nav");
  const checkBox = document.createElement("input");
  const div = document.createElement("div");
  let button = document.createElement("button");
  listMain.insertBefore(li, listItems[0]);
  li.appendChild(nav);
  nav.classList.add("list-item");
  nav.appendChild(checkBox);
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-task");
  checkBox.addEventListener("click", function () {
    div.classList.toggle("completed");
  });
  nav.appendChild(div);
  div.textContent = inputField.value;
  nav.appendChild(button);
  button.textContent = "🚫";
  button.classList.add("btn-delete");
  button.addEventListener("click", function () {
    button.parentNode.parentNode.remove();
  });
  inputField.value = "";
}

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (listItems.length === 0) {
      appendItem();
    } else {
      popItem();
    }
  }
});
