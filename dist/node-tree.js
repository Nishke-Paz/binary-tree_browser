export class TreeNode {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
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
}
