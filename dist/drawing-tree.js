export class DrawingTree {
    constructor(ctx, treeToDraw, canvasWidth, canvasHeight) {
        this._treeToDraw = treeToDraw;
        this._ctx = ctx;
        this._canvasHeight = canvasHeight;
        this._canvasWidth = canvasWidth;
        this._coeffx = 2;
        this._coeffy = 0.556;
        this._radiusForCircle = 20;
    }
    draw() {
        this._ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
        this.drawTree(this._treeToDraw.root, this._canvasWidth / 2, 20, this._coeffx, this._coeffy);
    }
    updateTree(newTree) {
        this._treeToDraw = newTree;
    }
    drawTree(node, x, y, coeffx, coeffy, prevNode = null, isLeft = false) {
        if (node) {
            if (prevNode) {
                if ((coeffx * 0.5 > 0.0625) && (coeffy * 1.8 < 10.4976)) {
                    coeffx = coeffx * 0.5;
                    coeffy = coeffy * 1.8;
                }
                if (isLeft) {
                    this.drawCircle(this.xOfLeftChild(x, coeffx), this.yOfChild(y, coeffy), this._radiusForCircle, node.value);
                    this.drawLine(x, y, this.xOfLeftChild(x, coeffx), this.yOfChild(y, coeffy));
                    x = this.xOfLeftChild(x, coeffx);
                }
                else {
                    this.drawCircle(this.xOfRightChild(x, coeffx), this.yOfChild(y, coeffy), this._radiusForCircle, node.value);
                    this.drawLine(x, y, this.xOfRightChild(x, coeffx), this.yOfChild(y, coeffy));
                    x = this.xOfRightChild(x, coeffx);
                }
                y = this.yOfChild(y, coeffy);
            }
            else {
                this.drawCircle(x, y, this._radiusForCircle, node.value);
            }
            this.drawTree(node.left, x, y, coeffx, coeffy, node, true);
            this.drawTree(node.right, x, y, coeffx, coeffy, node, false);
        }
    }
    drawCircle(x, y, r, value) {
        this._ctx.beginPath();
        this._ctx.arc(x, y, r, 0, 2 * Math.PI);
        this._ctx.stroke();
        this._ctx.closePath();
        this._ctx.strokeText(String(value), x - 5, y);
    }
    drawLine(toX, toY, x, y) {
        const moveToX = toX;
        const moveToY = toY + this._radiusForCircle;
        const lineToX = x;
        const lineToY = y - this._radiusForCircle;
        this._ctx.beginPath();
        this._ctx.moveTo(moveToX, moveToY);
        this._ctx.lineTo(lineToX, lineToY);
        this._ctx.stroke();
    }
    xOfLeftChild(parentX, coeffx) {
        return parentX - (300 * coeffx);
    }
    xOfRightChild(parentX, coeffx) {
        return parentX + (300 * coeffx);
    }
    yOfChild(parentY, coeffy) {
        return parentY + (45 * coeffy);
    }
}
