import { BinaryTree } from "./binary-tree";
import { TreeNode } from "./node-tree";

export class DrawingTree<T>{
    private _ctx: CanvasRenderingContext2D;
    private _treeToDraw: BinaryTree<T>;
    private _canvasWidth: number;
    private _canvasHeight: number;
    private _coeffx: number;
    private _coeffy: number;
    private _radiusForCircle: number;

    constructor (ctx: CanvasRenderingContext2D, treeToDraw: BinaryTree<T>, canvasWidth: number, canvasHeight: number){
        this._treeToDraw = treeToDraw;
        this._ctx = ctx;
        this._canvasHeight = canvasHeight;
        this._canvasWidth = canvasWidth;
        this._coeffx = 2;
        this._coeffy = 0.556;
        this._radiusForCircle = 20;
    }

    public draw(): void{
        this._ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
        this.drawTree(this._treeToDraw.root, this._canvasWidth / 2, 20, this._coeffx, this._coeffy);
    }

    public updateTree(newTree: BinaryTree<T>): void{
        this._treeToDraw = newTree;
    }

    private drawTree(node: TreeNode<T>, x: number, y: number,
        coeffx: number, coeffy: number, prevNode: TreeNode<T> = null, isLeft: boolean = false): void{
        if (node) {
            if (prevNode){
                if ((coeffx * 0.5 > 0.0625) && (coeffy * 1.8 < 10.4976)){
                    coeffx = coeffx * 0.5;
                    coeffy = coeffy * 1.8;
                }
                if (isLeft){
                    this.drawCircle(this.xOfLeftChild(x, coeffx), this.yOfChild(y, coeffy), this._radiusForCircle, node.value);
                    this.drawLine(x, y, this.xOfLeftChild(x, coeffx), this.yOfChild(y, coeffy));
                    x = this.xOfLeftChild(x, coeffx);
                } else {
                    this.drawCircle(this.xOfRightChild(x, coeffx), this.yOfChild(y, coeffy), this._radiusForCircle, node.value);
                    this.drawLine(x, y, this.xOfRightChild(x, coeffx), this.yOfChild(y, coeffy));
                    x = this.xOfRightChild(x, coeffx);
                }
                y = this.yOfChild(y, coeffy);
            } else {
                this.drawCircle(x, y, this._radiusForCircle, node.value);
            }
            this.drawTree(node.left, x, y, coeffx, coeffy, node, true);
            this.drawTree(node.right, x, y, coeffx, coeffy, node, false);
        }
    }

    private drawCircle(x: number, y: number, r: number, value: T): void{
        this._ctx.beginPath();
        this._ctx.arc(x, y, r, 0, 2 * Math.PI);
        this._ctx.stroke();
        this._ctx.closePath();
        this._ctx.strokeText(String(value), x - 5, y);
    }

    private drawLine(toX: number, toY: number, x: number, y: number): void{
        const moveToX: number = toX;
        const moveToY: number = toY + this._radiusForCircle;
        const lineToX: number = x;
        const lineToY: number = y - this._radiusForCircle;
        this._ctx.beginPath();
        this._ctx.moveTo(moveToX, moveToY);
        this._ctx.lineTo(lineToX, lineToY);
        this._ctx.stroke();
    }

    public xOfLeftChild(parentX: number, coeffx: number): number{
        return parentX - (300 * coeffx);
    }
    public xOfRightChild(parentX: number, coeffx: number): number{
        return parentX + (300 * coeffx);
    }

    public yOfChild(parentY: number, coeffy: number): number{
        return parentY + (45 * coeffy);
    }
}
