// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html

const config = {
  type: Phaser.AUTO,
  width: 1920,
  length: 1080,
  physics: {
    default: "arcade",
    arcade:{
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.Center_Both,
  }
}

const game = new Phaser.Game(config)
console.log(game)