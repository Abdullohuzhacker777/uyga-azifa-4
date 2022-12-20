import { findEliment, generateDate } from "./Utils/main.js";
const ElTempate = document.querySelector("#template");
const elCarts = findEliment(".carts");

let postc = [];

fetch("https://63a03989e3113e5a5c374bea.mockapi.io/postc")
  .then((res) => res.json())
  .then((Date) => {
    postc = Date;
    renderPosts(postc);
    // console.log(postc);
  })
  .catch((err) => {
    console.log(err);
  });

function renderPosts(postc, parent = elCarts) {
  //   parent.textContent = "";

  const frgMentPost = document.createDocumentFragment();

  postc.reverse().forEach((post) => {
    const template = ElTempate.content.cloneNode(true);
    const name = findEliment(".name", template);
    const Title = findEliment(".subtatal", template);
    const nulls = findEliment(".nulls", template);
    const img = findEliment("img", template);
    const date = generateDate(post.createdAt);

    img.setAttribute("src", post.avatar);
    nulls.textContent = date;
    Title.textContent = post.Title;
    name.textContent = post.name;

    frgMentPost.appendChild(template);
  });

  parent.appendChild(frgMentPost);
}
