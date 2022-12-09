import {
  CreateBox,
  CubeTexture,
  Engine, FreeCamera, PointLight, Scene, ShadowGenerator, StandardMaterial, Texture, Vector3,
} from '@babylonjs/core';
import * as helpers from './helpers';
import Planet from './Planet/Planet';

class SolarSystem {
  private scene: Scene;

  private engine: Engine;

  private mercury!: Planet;

  private venus!: Planet;

  private earth!: Planet;

  private mars!: Planet;

  private saturn!: Planet;

  private uranus!: Planet;

  private neptune!: Planet;

  private pluto!: Planet;

  private sun!: Planet;

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
    const camera = new FreeCamera(helpers.DICTIONARY.CAMERA, new Vector3(0, 0, -15), scene);
    camera.speed = 1;
    camera.attachControl();

    const pointLight = new PointLight(
      helpers.DICTIONARY.POINT_LIGHT,
      new Vector3(0, 0, 0),
      scene,
    );

    pointLight.intensity = 5;

    this.sun = new Planet({
      ...helpers.SUN_BASE_PROPS,
      scene,
    });

    this.mercury = new Planet({
      ...helpers.MERCURY_BASE_PROPS,
      scene,
    });

    this.venus = new Planet({
      ...helpers.VENUS_BASE_PROPS,
      scene,
    });

    this.earth = new Planet({
      ...helpers.EARTH_BASE_PROPS,
      scene,
    });

    this.mars = new Planet({
      ...helpers.MARS_BASE_PROPS,
      scene,
    });

    this.saturn = new Planet({
      ...helpers.SATURN_BASE_PROPS,
      scene,
    });

    this.uranus = new Planet({
      ...helpers.URANUS_BASE_PROPS,
      scene,
    });

    this.neptune = new Planet({
      ...helpers.NEPTUNE_BASE_PROPS,
      scene,
    });

    this.pluto = new Planet({
      ...helpers.PLUTO_BASE_PROPS,
      scene,
    });

    const skybox = CreateBox(helpers.DICTIONARY.SKY_BOX, { size: 1000 }, scene);
    const skyboxMaterial = new StandardMaterial(helpers.DICTIONARY.SKY_BOX_MATERIAL, scene);

    skyboxMaterial.backFaceCulling = false;
    skybox.infiniteDistance = true;
    skybox.material = skyboxMaterial;

    skyboxMaterial.reflectionTexture = new CubeTexture('./textures/skybox', scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;

    const shadowGenerator = new ShadowGenerator(1024, pointLight);

    const renderList = shadowGenerator.getShadowMap()?.renderList;

    if (renderList) {
      renderList.push(
        this.earth.planet,
        this.mars.planet,
        this.mercury.planet,
        this.venus.planet,
        this.saturn.planet,
        this.uranus.planet,
        this.neptune.planet,
        this.pluto.planet,
      );
    }

    scene.beforeRender = () => {
      this.earth.rotate();
      this.mars.rotate();
      this.sun.rotate();
      this.mercury.rotate();
      this.venus.rotate();
      this.saturn.rotate();
      this.uranus.rotate();
      this.neptune.rotate();
      this.pluto.rotate();
    };

    return scene;
  }

  resizeEngine = (): void => {
    this.engine.resize();
  }
}

export default SolarSystem;
