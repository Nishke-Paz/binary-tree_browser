import { Line } from "./line.js";
import { Сircle } from "./circle.js";
export class TreeNode {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
        this._line = null;
    }
    setСoordinatesForLine(toX, toY) {
        const moveToX = toX;
        const moveToY = toY + this._nodeView.r;
        const lineToX = this._nodeView.x;
        const lineToY = this._nodeView.y - this._nodeView.r;
        this._line = new Line(moveToX, moveToY, lineToX, lineToY);
    }
    setСoordinatesForCircle(x, y) {
        this._nodeView = new Сircle(x, y);
    }
    setСoefficients(coeffx, coeffy) {
        if ((coeffx * 0.5 > 0.0625) && (coeffy * 1.8 < 10.4976)) {
            this._coeffx = coeffx * 0.5;
            this._coeffy = coeffy * 1.8;
        }
        else {
            this._coeffx = coeffx;
            this._coeffy = coeffy;
        }
    }
    changeСoefficients(coeffx, coeffy) {
        this._coeffx = coeffx;
        this._coeffy = coeffy;
    }
    coordinatesOfLeftChild() {
        return { cx: (this._nodeView.x - (300 * this._coeffx)),
            cy: (this._nodeView.y + (45 * this._coeffy)) };
    }
    coordinatesOfRightChild() {
        return { cx: (this._nodeView.x + (300 * this._coeffx)),
            cy: (this._nodeView.y + (45 * this._coeffy)) };
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get left() {
        return this._left;
    }
    set left(newNode) {
        this._left = newNode;
    }
    get right() {
        return this._right;
    }
    set right(newNode) {
        this._right = newNode;
    }
    get coeffx() {
        return this._coeffx;
    }
    get coeffy() {
        return this._coeffy;
    }
    get nodeView() {
        return this._nodeView;
    }
    get line() {
        return this._line;
    }
}
