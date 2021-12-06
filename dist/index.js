import { BinaryTree } from "./binary-tree.js";
const c = document.getElementById("canvas_binary-three");
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight * 2;
const bt = new BinaryTree(ctx);
const btn = document.getElementById("btnNumber");
const del = document.getElementById("btnDel");
const search = document.getElementById("btnSearch");
const clickBtn = function () {
    const value = parseInt(document.getElementById("number").value, 10);
    bt.add(window.innerWidth / 2, 20, 15, value);
};
const clickDel = function () {
    const value = parseInt(document.getElementById("del").value, 10);
    bt.delete(value);
};
const clickSearch = function () {
    const value = parseInt(document.getElementById("search").value, 10);
    if (bt.search(value)) {
        document.getElementById("feedback").textContent = "Значение найдено";
    }
    else {
        document.getElementById("feedback").textContent = "Значение не найдено";
    }
};
btn.addEventListener("click", clickBtn, false);
del.addEventListener("click", clickDel, false);
search.addEventListener("click", clickSearch, false);
