export class Ball {
  constructor(context2D, vx = 5, vy = 5) {
    this._ctx = context2D;
    this._x = 300;
    this._y = 200;
    this._width = 10;
    this._height = 10;
    this._vx = vx;
    this._vy = vy;
  }

  draw() {
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(this.x, this.y, this._width, this._height);
  }

  update() {
    this.x += this._vx;
    this.y += this._vy;

    if (this.x >= this._ctx.canvas.width || this.x <= 0) {
      this.vx = -this.vx;
    }

    if (this.y >= this._ctx.canvas.height || this.y <= 0) {
      this.vy = -this.vy;
    }
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

  get vx() {
    return this._vx;
  }

  set vx(value) {
    this._vx = value;
  }

  get vy() {
    return this._vy;
  }

  set vy(value) {
    this._vy = value;
  }
}
