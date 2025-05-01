/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2025
// This is the Game Scene

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default GameScene