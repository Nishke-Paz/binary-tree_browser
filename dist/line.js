export class Line {
    constructor(moveToX, moveToY, lineToX, lineToY) {
        this._lineToX = lineToX;
        this._lineToY = lineToY;
        this._moveToX = moveToX;
        this._moveToY = moveToY;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this._moveToX, this._moveToY);
        ctx.lineTo(this._lineToX, this._lineToY);
        ctx.stroke();
    }
    deleteLine(ctx) {
        ctx.clearRect(this._moveToX, this._moveToY, this._lineToX - this._moveToX, this._lineToY - this._moveToY);
    }
    changeCoordinates(moveToX, moveToY, lineToX, lineToY) {
        this._lineToX = lineToX;
        this._lineToY = lineToY;
        this._moveToX = moveToX;
        this._moveToY = moveToY;
    }
    get moveToX() {
        return this._moveToX;
    }
    get moveToY() {
        return this._moveToY;
    }
    get lineToX() {
        return this._lineToX;
    }
    get lineToY() {
        return this._lineToY;
    }
}
