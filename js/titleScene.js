/* global Phaser */

// Copyright (c) 2025 yi.zhou All rights reserved
//
// Created by: yi.zgou
// Created on: Apr 2025 
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }
  create(data) {
  }
  update(time, delta) {
  }
}

export default TitleScene 

