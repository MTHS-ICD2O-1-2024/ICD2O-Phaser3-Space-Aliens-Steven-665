/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2020
// This is the Menu Scene

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }

  clickButton() {
  }
}

export default MenuScene