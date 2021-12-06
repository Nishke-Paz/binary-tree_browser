export class Сircle<T>{
    private _x: number;
    private _y: number;
    private _r: number;

    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
        this._r = 15;
    }

    public draw(ctx: CanvasRenderingContext2D, value: T): void{
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeText(String(value), this._x - 5, this._y);
    }

    public deleteCircle(ctx: CanvasRenderingContext2D): void{
        ctx.clearRect(this._x - this._r - 1, this._y - this._r - 1, (this._r * 2) + 2, (this._r * 2) + 2);
    }

    get x(): number{
        return this._x;
    }
    get y(): number{
        return this._y;
    }
    get r(): number{
        return this._r;
    }
}
