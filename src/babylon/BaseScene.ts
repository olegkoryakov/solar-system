import {
  Engine, FreeCamera, HemisphericLight, Scene, Vector3,
} from '@babylonjs/core';
import Ball from './Ball';
import Ground from './Ground';
import * as helpers from './helpers';

class BaseScene {
  private scene: Scene;

  private engine: Engine;

  private ball!: Ball;

  private ground!: Ground;

  constructor(canvas: HTMLCanvasElement) {
    this.engine = new Engine(canvas);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      console.log('run render loop');
      this.scene.render();
    });
  }

  private createScene = (): Scene => {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera(helpers.DICTIONARY.CAMERA, new Vector3(0, 2, -3), scene);
    camera.speed = 1;
    camera.attachControl();

    const hemiLight = new HemisphericLight(
      helpers.DICTIONARY.HEMI_LIGHT,
      new Vector3(0, 1, 0),
      scene,
    );

    hemiLight.intensity = 1;

    this.ground = new Ground(scene);
    this.ball = new Ball(scene);

    return scene;
  }

  resizeEngine = (): void => {
    this.engine.resize();
  }
}

export default BaseScene;
