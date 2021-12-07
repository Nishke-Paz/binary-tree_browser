export class TreeNode<T> {
    private _value: T;
    private _left: TreeNode<T>;
    private _right: TreeNode<T>;

    constructor(value: T){
        this._value = value;
        this._left = null;
        this._right = null;
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
}
