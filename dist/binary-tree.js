import { TreeNode } from "./node-tree.js";
export class BinaryTree {
    constructor() {
        this._root = null;
    }
    addTo(actual, value, prevNode, isLeft) {
        if (actual === null) {
            const newNode = new TreeNode(value);
            return newNode;
        }
        if (value > actual.value) {
            actual.right = this.addTo(actual.right, value, actual, false);
        }
        else if (value < actual.value) {
            actual.left = this.addTo(actual.left, value, actual, true);
        }
        return actual;
    }
    add(x, y, r, value) {
        if (this._root === null) {
            this._root = new TreeNode(value);
        }
        this._root = this.addTo(this._root, value, null, null);
    }
    replacementNode(actual) {
        return actual.left === null ? actual : this.replacementNode(actual.left);
    }
    deleteTo(actual, value) {
        if (actual === null) {
            return null;
        }
        if (value === actual.value) {
            if (actual.right === null && actual.left === null) {
                return null;
            }
            if (!(actual.right !== null && actual.left !== null)) {
                const currentNode = actual.left || actual.right;
                return currentNode;
            }
            const newValue = this.replacementNode(actual.right);
            actual.right = this.deleteTo(actual.right, newValue.value);
            actual.value = newValue.value;
            return actual;
        }
        if (value < actual.value) {
            actual.left = this.deleteTo(actual.left, value);
        }
        else {
            actual.right = this.deleteTo(actual.right, value);
        }
        return actual;
    }
    delete(value) {
        this._root = this.deleteTo(this._root, value);
    }
    search(value, node = this._root) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        return (value < node.value) ? this.search(value, node.left) : this.search(value, node.right);
    }
    get root() {
        return this._root;
    }
}
