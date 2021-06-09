import { InputManager } from "./inputManager.js";

const inputManager = new InputManager();

export class Racket {
  constructor(context2D, startingPosition) {
    this._ctx = context2D;
    this.x = startingPosition;
    this.y = 300;
    this._width = 15;
    this._height = 80;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  draw() {
    this._ctx.fillRect(this.x, this.y, this._width, this._height);
  }

  update() {
    // Update position based on input
    if (inputManager.upPressed) {
      this.y -= 7;
    }
    if (inputManager.downPressed) {
      this.y += 7;
    }

    // check if hit borders
    if (this.y <= 0) this.y = 0;
    if (this.y + this.height >= this._ctx.canvas.height)
      this.y = this._ctx.canvas.height - this.height;
  }
}
