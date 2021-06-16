import { Ball } from "./ball.js";
import { Racket } from "./racket.js";

class Game {
  constructor() {
    this.initCanvas();
    this.initSprites();
    this._score = { player: 0, computer: 0 };
    this._setOver = false;
    this._gameOver = false;
  }

  initCanvas() {
    this._canvas = document.getElementById("game_canvas");
    this._ctx = this._canvas.getContext("2d");
    this._canvas.width = this._canvas.offsetWidth;
    this._canvas.height = this._canvas.offsetHeight;
  }

  initSprites() {
    this._ball = new Ball(this._ctx);
    this._racket = new Racket(this._ctx, 50);
    this._aiRacket = new Racket(this._ctx, this._ctx.canvas.width - 60);
  }

  animate() {
    if (this._setOver) {
      this.startNewSet();
    }
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.displayScore();
    this._ball.update();
    this._racket.update();
    this._aiRacket.update();
    if (this._ball.x <= this._canvas.width / 2) {
      this.checkCollisionWithRacket({
        first: [this._racket.x + this._racket.width, this._racket.y],
        second: [
          this._racket.x + this._racket.width,
          this._racket.y + this._racket.height,
        ],
      });
    } else {
      this.checkCollisionWithAiRacket({
        first: [this._aiRacket.x, this._aiRacket.y],
        second: [this._aiRacket.x, this._aiRacket.y + this._aiRacket.height],
      });
    }
    this.checkIfScored();
    this._ball.draw();
    this._racket.draw();
    this._aiRacket.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  checkCollisionWithRacket(collidingSide) {
    if (
      this._ball.x <= collidingSide.first[0] &&
      this._ball.y >= collidingSide.first[1] &&
      this._ball.y <= collidingSide.second[1]
    ) {
      this._ball.vx = -this._ball.vx;
    } else {
      return;
    }
  }

  checkCollisionWithAiRacket(collidingSide) {
    if (
      this._ball.x + this._ball.width >= collidingSide.first[0] &&
      this._ball.y >= collidingSide.first[1] &&
      this._ball.y <= collidingSide.second[1]
    ) {
      this._ball.vx = -this._ball.vx;
    } else {
      return;
    }
  }

  displayScore() {
    this._ctx.font = "40px Georgie";
    this._ctx.fillText(this.score, this._ctx.canvas.width / 2 - 30, 50);
  }

  start() {
    this.animate();
  }

  startNewSet() {
    this._ball = new Ball(this._ctx);
    this._setOver = false;
  }

  checkIfScored() {
    const { player, computer } = this._score;
    if (this._ball.x < this._racket.x) {
      this.score = { player, computer: computer + 1 };
      this._setOver = true;
    } else if (this._ball.x > this._aiRacket.x) {
      this.score = { player: player + 1, computer };
      this._setOver = true;
    }
  }

  get score() {
    return `${this._score.player} - ${this._score.computer}`;
  }

  set score(value) {
    this._score = value;
  }
}

const game = new Game();
game.start();
