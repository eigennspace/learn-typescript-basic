"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }
}
exports.Rectangle = Rectangle;
