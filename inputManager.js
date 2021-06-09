export class InputManager {
  constructor() {
    this.addEventListeners();
    this._up = false;
    this._down = false;
  }

  addEventListeners() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp") this.upPressed = true;
      else if (e.code === "ArrowDown") this.downPressed = true;
    });
    window.addEventListener("keyup", (e) => {
      this.upPressed = false;
      this.downPressed = false;
    });
  }

  get upPressed() {
    return this._up;
  }

  set upPressed(value) {
    this._up = value;
  }

  get downPressed() {
    return this._down;
  }

  set downPressed(value) {
    this._down = value;
  }
}
