import { findEliment } from "./Utils/main.js";

const elForem = document.querySelector("#forem");

elForem.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const img = evt.target.img.value;
  const name = evt.target.name.value;
  const subtatal = evt.target.subtatal.value;
  const nulls = evt.target.nulls.value;
  const posts = {
    avatar: img,
    name: name,
    Title: subtatal,
    createdAt: nulls,
  };
  fetch("https://63a03989e3113e5a5c374bea.mockapi.io/postc", {
    method: "POST",

    body: JSON.stringify(posts),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((date) => alert("post mofaqiyatli qoshildi"));
});
