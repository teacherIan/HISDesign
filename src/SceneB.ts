import gsap from 'gsap';
import * as PIXI from 'pixi.js';
import { Container, Graphics, Sprite, Text, TextOptions } from 'pixi.js';
import { IScene } from './Manager';
import { Manager } from './Manager';
import { PixiPlugin } from 'gsap/PixiPlugin';

export class SceneB extends Container implements IScene {
  private designText: Text;

  constructor() {
    super();
    this.designText = new Text({
      text: 'Design',
      style: {
        fontFamily: 'Arial',
        fontSize: 500,
        fill: 0x0000ff,
        align: 'center',
      },
    });
    this.designText.anchor.set(0.5, 0.5);
    this.designText.x = window.innerWidth / 2;
    this.designText.y = window.innerHeight / 2;
    this.designText.width = window.innerWidth / 2;
    this.designText.height = window.innerHeight / 2;

    this.addChild(this.designText);
  }

  update(framesPassed: number): void {
    // throw new Error('Method not implemented.');
  }
  resize(screenWidth: number, screenHeight: number): void {
    // throw new Error('Method not implemented.');
  }
}
