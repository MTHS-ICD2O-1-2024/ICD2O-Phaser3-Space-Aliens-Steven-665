/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html

// Setting the window 
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

const splashScene = new SplashScene()
const titleScene = new TitleScene()

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },

  },
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

game.scene.add('splashScene ', splashScene)
game.scene.add('titleScene ', titleScene)

game.scene.start("splashScene")