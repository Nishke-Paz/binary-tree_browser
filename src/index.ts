import { BinaryTree } from "./binary-tree.js";
import { DrawingTree } from "./drawing-tree.js";

const c = <HTMLCanvasElement> document.getElementById("canvas_binary-three");
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight * 2;
const bt: BinaryTree<number> = new BinaryTree();
const dt: DrawingTree<number> = new DrawingTree(ctx, bt, c.width, c.height);

const btn: HTMLElement = document.getElementById("btnNumber");
const del: HTMLElement = document.getElementById("btnDel");
const search: HTMLElement = document.getElementById("btnSearch");

const clickBtn = function(): void{
    const value: number = parseInt((<HTMLInputElement>document.getElementById("number")).value, 10);
    bt.add(window.innerWidth / 2, 20, 15, value);
    dt.updateTree(bt);
    dt.draw();
};
const clickDel = function(): void{
    const value: number = parseInt((<HTMLInputElement>document.getElementById("del")).value, 10);
    bt.delete(value);
    dt.updateTree(bt);
    dt.draw();
};
const clickSearch = function(): void{
    const value: number = parseInt((<HTMLInputElement>document.getElementById("search")).value, 10);
    if (bt.search(value)){
        document.getElementById("feedback").textContent = "Значение найдено";
    } else {
        document.getElementById("feedback").textContent = "Значение не найдено";
    }
};

btn.addEventListener("click", clickBtn, false);
del.addEventListener("click", clickDel, false);
search.addEventListener("click", clickSearch, false);
