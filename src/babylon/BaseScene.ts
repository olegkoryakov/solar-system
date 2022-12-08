import {
  Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3,
} from '@babylonjs/core';
import * as helpers from './helpers';

class BaseScene {
  private scene: Scene;

  private engine: Engine;

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
    const camera = new FreeCamera(helpers.DICTIONARY.CAMERA, new Vector3(0, 1, -3), scene);

    camera.attachControl();

    const hemiLight = new HemisphericLight(
      helpers.DICTIONARY.HEMI_LIGHT,
      new Vector3(0, 1, 0),
      scene,
    );

    hemiLight.intensity = 0.5;

    const ground = MeshBuilder.CreateGround(
      helpers.DICTIONARY.GROUND,
      { width: 10, height: 10 },
      scene,
    );

    ground.position = new Vector3(0, 0, 0);

    const ball = MeshBuilder.CreateSphere(
      helpers.DICTIONARY.BALL,
      { diameter: 1 },
      scene,
    );

    ball.position = new Vector3(0, 1, 0);

    return scene;
  }

  resizeEngine = (): void => {
    this.engine.resize();
  }
}

export default BaseScene;
