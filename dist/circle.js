export class Сircle {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._r = 15;
    }
    draw(ctx, value) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeText(String(value), this._x - 5, this._y);
    }
    deleteCircle(ctx) {
        ctx.clearRect(this._x - this._r - 1, this._y - this._r - 1, (this._r * 2) + 2, (this._r * 2) + 2);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get r() {
        return this._r;
    }
}
