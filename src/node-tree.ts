import { Line } from "./line.js";
import { Сircle } from "./circle.js";

export class TreeNode<T> {
    private _value: T;
    private _left: TreeNode<T>;
    private _right: TreeNode<T>;
    private _nodeView: Сircle<T>;
    private _line: Line;
    private _coeffx: number;
    private _coeffy: number;

    constructor(value: T){
        this._value = value;
        this._left = null;
        this._right = null;
        this._line = null;
    }

    public setСoordinatesForLine(toX: number, toY: number): void {
        const moveToX: number = toX;
        const moveToY: number = toY + this._nodeView.r;
        const lineToX: number = this._nodeView.x;
        const lineToY: number = this._nodeView.y - this._nodeView.r;
        this._line = new Line(moveToX, moveToY, lineToX, lineToY);
    }

    public setСoordinatesForCircle(x: number, y: number): void {
        this._nodeView = new Сircle<T>(x, y);
    }
    public setСoefficients(coeffx: number, coeffy: number): void {
        if ((coeffx * 0.5 > 0.0625) && (coeffy * 1.8 < 10.4976)){
            this._coeffx = coeffx * 0.5;
            this._coeffy = coeffy * 1.8;
        } else {
            this._coeffx = coeffx;
            this._coeffy = coeffy;
        }
    }
    public changeСoefficients(coeffx: number, coeffy: number): void {
        this._coeffx = coeffx;
        this._coeffy = coeffy;
    }

    public coordinatesOfLeftChild(): { cx: number, cy: number } {
        return { cx: (this._nodeView.x - (300 * this._coeffx)),
                cy: (this._nodeView.y + (45 * this._coeffy)) };
    }

    public coordinatesOfRightChild(): { cx: number, cy: number } {
        return { cx: (this._nodeView.x + (300 * this._coeffx)),
                cy: (this._nodeView.y + (45 * this._coeffy)) };
    }

    public get value(): T{
        return this._value;
    }
    set value(value: T){
        this._value = value;
    }
    get left(): TreeNode<T>{
        return this._left;
    }
    set left(newNode: TreeNode<T>){
        this._left = newNode;
    }
    get right(): TreeNode<T>{
        return this._right;
    }
    set right(newNode: TreeNode<T>){
        this._right = newNode;
    }
    get coeffx(): number{
        return this._coeffx;
    }
    get coeffy(): number{
        return this._coeffy;
    }
    get nodeView(): Сircle<T>{
        return this._nodeView;
    }
    get line(): Line{
        return this._line;
    }
}
