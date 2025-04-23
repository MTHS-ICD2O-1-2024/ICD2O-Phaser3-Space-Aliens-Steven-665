/* global Phaser */

// Copyright (c) 2025 yi.zhou All rights reserved
//
// Created by: yi.zgou
// Created on: Apr 2025 
// This is the Splash Scene

class SpashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  preload() {
    console.log('Splash Scene')
  }
  create(data) {
  }
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}
export default SpashScene