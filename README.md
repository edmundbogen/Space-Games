# Space Invaders - A Pygame Implementation

Welcome to **Space Invaders**, a classic arcade game recreated using Python and Pygame. This game involves controlling a spaceship to shoot down incoming enemies while avoiding collisions. This README provides detailed instructions on how to set up, run, and play the game.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Assets](#assets)
- [Running the Game](#running-the-game)
- [Controls](#controls)
- [Gameplay](#gameplay)
- [Code Structure](#code-structure)
- [Acknowledgments](#acknowledgments)

## Features

- **Classic Gameplay**: Experience the nostalgia of the original Space Invaders game.
- **Sound Effects**: Enjoy laser shooting and explosion sounds to enhance the gaming experience.
- **Score Tracking**: Keep track of your score as you destroy enemies.
- **Game Over Screen**: A game over message is displayed when enemies reach the player.
- **Smooth Animations**: The game runs at 60 FPS for smooth movement and animations.

## Requirements

- **Python 3.x**: Ensure you have Python 3 installed on your system.
- **Pygame**: The game is built using the Pygame library.
- **Assets**: Image and sound files located in the `assets` directory.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/space-invaders-pygame.git
cd space-invaders-pygame
```

### 2. Install Pygame

Install Pygame using pip:

```bash
pip install pygame
```

### 3. Verify Python Installation

Ensure Python is correctly installed:

```bash
python --version
```

## Assets

The game uses specific image and sound assets located in the `assets` directory:

- **Images**:
  - `player.png`: The spaceship controlled by the player.
  - `enemy.png`: The enemy spacecraft.
  - `bullet.png`: The projectile fired by the player.
  - `spaceship.png`: Icon image for the game window.
- **Sounds**:
  - `laser.wav`: Sound played when firing a bullet.
  - `explosion.wav`: Sound played when an enemy is destroyed.
  - `game_over.wav`: Sound played when the game is over.

**Note**: Ensure all asset files are placed in the `assets` directory within the game folder.

## Running the Game

Navigate to the game directory and run the Python script:

```bash
python space_invaders.py
```

## Controls

- **Left Arrow / 'A' Key**: Move the player spaceship to the left.
- **Right Arrow / 'D' Key**: Move the player spaceship to the right.
- **Spacebar**: Fire a bullet.

## Gameplay

- **Objective**: Destroy as many enemy ships as possible without letting them reach the bottom of the screen.
- **Scoring**: Each enemy destroyed increases your score by 1.
- **Game Over**: The game ends when any enemy ship reaches the player level.

## Code Structure

### 1. Import Statements

```python
import pygame
import random
import math
```

- **pygame**: Library for game development.
- **random**: Used for random enemy positioning.
- **math**: Used for collision detection calculations.

### 2. Game Initialization

- **Screen Setup**: Defines screen dimensions and creates the game window.
- **Colors**: Sets up color constants, including the purple background.
- **Assets Loading**: Loads images and sounds used in the game.

### 3. Game Variables

- **Player Variables**: Manages player image, position, and movement.
- **Enemy Variables**: Manages multiple enemies' images, positions, and movements.
- **Bullet Variables**: Manages bullet image, position, state, and movement.
- **Score Variables**: Keeps track of the player's score and displays it.
- **Game Over Variables**: Flags to handle the game over state and sound.

### 4. Functions

- `show_score(x, y)`: Renders and displays the current score.
- `game_over_text()`: Displays the "GAME OVER" message.
- `player(x, y)`: Draws the player's spaceship on the screen.
- `enemy(x, y, i)`: Draws an enemy spaceship on the screen.
- `fire_bullet(x, y)`: Fires a bullet from the player's current position.
- `is_collision(enemy_x, enemy_y, bullet_x, bullet_y)`: Detects collisions between bullets and enemies.

### 5. Game Loop

- **Event Handling**: Captures user inputs and handles quitting the game.
- **Movement Logic**: Updates positions of the player, enemies, and bullets.
- **Collision Detection**: Checks for collisions and updates the score.
- **Rendering**: Draws all game elements on the screen.
- **Frame Rate Control**: Limits the game to run at 60 frames per second.

## Acknowledgments

- **Pygame Documentation**: For providing comprehensive guides and resources.
- **OpenAI's ChatGPT**: Assisted in refining and improving the game code.
- **Community Tutorials**: Various online tutorials that inspired this implementation.

**Enjoy the game!**
