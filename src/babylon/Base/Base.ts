import { Scene } from '@babylonjs/core';
import { BaseProps } from './types';

class Base {
  scene: Scene;

  constructor({ scene }: BaseProps) {
    this.scene = scene;
  }
}

export default Base;
