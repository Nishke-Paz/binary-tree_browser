import { TreeNode } from "./node-tree.js";

export class BinaryTree<T>{
    private _root: TreeNode<T>;

    constructor(){
        this._root = null;
    }

    private addTo(actual: TreeNode<T>, value: T, prevNode: TreeNode<T>, isLeft: boolean): TreeNode<T>{
        if (actual === null) {
            const newNode: TreeNode<T> = new TreeNode(value);
            return newNode;
        }

        if (value > actual.value){
            actual.right = this.addTo(actual.right, value, actual, false);
        } else if (value < actual.value){
            actual.left = this.addTo(actual.left, value, actual, true);
        }
        return actual;
    }

    public add(x: number, y: number, r: number, value: T): void{
        if (this._root === null){
            this._root = new TreeNode(value);
        }
        this._root = this.addTo(this._root, value, null, null);
    }

    private replacementNode (actual: TreeNode<T>): TreeNode<T>{
        return actual.left === null ? actual : this.replacementNode(actual.left);
    }

    private deleteTo(actual: TreeNode<T>, value: T): TreeNode<T>{
        if (actual === null){
            return null;
        }
        if (value === actual.value){
            if (actual.right === null && actual.left === null){
                return null;
            }
            if (!(actual.right !== null && actual.left !== null)){
                const currentNode: TreeNode<T> = actual.left || actual.right;
                return currentNode;
            }
            const newValue = this.replacementNode(actual.right);
            actual.right = this.deleteTo(actual.right, newValue.value);
            actual.value = newValue.value;
            return actual;
        }
        if (value < actual.value){
            actual.left = this.deleteTo(actual.left, value);
        } else {
            actual.right = this.deleteTo(actual.right, value);
        }
        return actual;
    }

    public delete (value: T): void{
        this._root = this.deleteTo(this._root, value);
    }

    public search (value: T, node: TreeNode<T> = this._root): boolean{
        if (node === null) {
            return false;
        }
        if (value === node.value){
            return true;
        }
        return (value < node.value) ? this.search(value, node.left) : this.search(value, node.right);
    }

    get root(): TreeNode<T>{
        return this._root;
    }
}
