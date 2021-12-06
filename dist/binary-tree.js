import { TreeNode } from "./node-tree.js";
export class BinaryTree {
    constructor(ctx) {
        this.root = null;
        this.ctx = ctx;
    }
    addTo(actual, value, prevNode, isLeft) {
        if (actual === null) {
            const newNode = new TreeNode(value);
            let xy;
            if (isLeft) {
                xy = prevNode.coordinatesOfLeftChild();
            }
            else {
                xy = prevNode.coordinatesOfRightChild();
            }
            newNode.setСoordinatesForCircle(xy.cx, xy.cy);
            newNode.setСoefficients(prevNode.coeffx, prevNode.coeffy);
            newNode.nodeView.draw(this.ctx, value);
            newNode.setСoordinatesForLine(prevNode.nodeView.x, prevNode.nodeView.y);
            newNode.line.draw(this.ctx);
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
        if (this.root === null) {
            this.root = new TreeNode(value);
            this.root.setСoordinatesForCircle(x, y);
            this.root.setСoefficients(2, 0.556);
            this.root.nodeView.draw(this.ctx, value);
        }
        this.root = this.addTo(this.root, value, null, null);
    }
    deleteBranch(node) {
        node.nodeView.deleteCircle(this.ctx);
        if (node.left) {
            node.left.line.deleteLine(this.ctx);
            this.deleteBranch(node.left);
        }
        if (node.right) {
            node.right.line.deleteLine(this.ctx);
            this.deleteBranch(node.right);
        }
    }
    redrawingNode(node, prevNode, isLeft) {
        let xy;
        node.setСoefficients(prevNode.coeffx, prevNode.coeffy);
        if (isLeft) {
            xy = prevNode.coordinatesOfLeftChild();
        }
        else {
            xy = prevNode.coordinatesOfRightChild();
        }
        node.setСoordinatesForCircle(xy.cx, xy.cy);
        node.nodeView.draw(this.ctx, node.value);
        node.setСoordinatesForLine(prevNode.nodeView.x, prevNode.nodeView.y);
        node.line.draw(this.ctx);
    }
    redrawingBranch(node) {
        if (node.left) {
            this.redrawingNode(node.left, node, true);
            this.redrawingBranch(node.left);
        }
        if (node.right) {
            this.redrawingNode(node.right, node, false);
            this.redrawingBranch(node.right);
        }
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
                actual.nodeView.deleteCircle(this.ctx);
                if (actual.line) {
                    actual.line.deleteLine(this.ctx);
                }
                return null;
            }
            if (!(actual.right !== null && actual.left !== null)) {
                const currentNode = actual.left || actual.right;
                this.deleteBranch(actual);
                currentNode.setСoordinatesForCircle(actual.nodeView.x, actual.nodeView.y);
                currentNode.changeСoefficients(actual.coeffx, actual.coeffy);
                if (actual.line) {
                    currentNode.line.changeCoordinates(actual.line.moveToX, actual.line.moveToY, actual.line.lineToX, actual.line.lineToY);
                }
                currentNode.nodeView.draw(this.ctx, currentNode.value);
                this.redrawingBranch(currentNode);
                return currentNode;
            }
            actual.nodeView.deleteCircle(this.ctx);
            const newValue = this.replacementNode(actual.right);
            actual.value = newValue.value;
            actual.nodeView.draw(this.ctx, actual.value);
            actual.right = this.deleteTo(actual.right, newValue.value);
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
        this.root = this.deleteTo(this.root, value);
    }
    search(value, node = this.root) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        return (value < node.value) ? this.search(value, node.left) : this.search(value, node.right);
    }
}
