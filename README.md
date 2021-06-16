# js_pong

## Introduction
This a JS implementation of classic PONG game. The implementation does not use any third parties libraries. 
It uses Canvas API.

## Classes
### Game
The controller - contains the main logic for the game
- start
- update sprite
- draw sprite
- check for collision

### Ball
The class representing the ball. It contains the following methods/constructors
- constructor to initialize main properties for the ball
- update
- draw

### Input Manager
Adds events listeners for up and down arrows and exposes properties to check whether keys are up or down.

### Racket
The class representing the racket. It contains the following methods/constructors
- constructor to initialize main properties for the ball
- update
- draw

## TODO
- No AI for the "Computer" played racket (currently the racket is moved by same up-down arrows as the other "human" played racket)
- Improve score logic
- Improve collision logic
