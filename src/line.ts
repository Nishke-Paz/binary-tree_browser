export class Line{
    private _moveToX: number;
    private _moveToY: number;
    private _lineToX: number;
    private _lineToY: number;

    constructor(moveToX: number, moveToY: number, lineToX: number, lineToY: number){
        this._lineToX = lineToX;
        this._lineToY = lineToY;
        this._moveToX = moveToX;
        this._moveToY = moveToY;
    }

    public draw(ctx: CanvasRenderingContext2D): void{
        ctx.beginPath();
        ctx.moveTo(this._moveToX, this._moveToY);
        ctx.lineTo(this._lineToX, this._lineToY);
        ctx.stroke();
    }

    public deleteLine(ctx: CanvasRenderingContext2D): void{
        ctx.clearRect(this._moveToX, this._moveToY, this._lineToX - this._moveToX, this._lineToY - this._moveToY);
    }

    public changeCoordinates(moveToX: number, moveToY: number, lineToX: number, lineToY: number): void{
        this._lineToX = lineToX;
        this._lineToY = lineToY;
        this._moveToX = moveToX;
        this._moveToY = moveToY;
    }

    get moveToX(): number{
        return this._moveToX;
    }

    get moveToY(): number{
        return this._moveToY;
    }

    get lineToX(): number{
        return this._lineToX;
    }

    get lineToY(): number{
        return this._lineToY;
    }
}
