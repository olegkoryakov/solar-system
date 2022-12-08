import {
  Mesh, MeshBuilder, Scene, StandardMaterial, Texture, Vector3,
} from '@babylonjs/core';
import Base from './Base';
import * as helpers from './helpers';

class Ball extends Base {
  private ball: Mesh

  constructor(scene: Scene) {
    super(scene);

    this.ball = this.createBall();
  }

  createBall = (): Mesh => {
    const ball = MeshBuilder.CreateSphere(
      helpers.DICTIONARY.BALL,
      { diameter: 1 },
      this.scene,
    );

    ball.material = this.createBallMaterial();

    ball.position = new Vector3(0, 1, 0);

    return ball;
  }

  createBallMaterial = (): StandardMaterial => {
    const ballMaterial = new StandardMaterial(helpers.DICTIONARY.BALL_MATERIAL, this.scene);

    const uvScale = 4;

    const diffuseTexture = new Texture('./textures/metal/metalDiffuse1k.jpg', this.scene);
    diffuseTexture.uScale = uvScale;
    diffuseTexture.vScale = uvScale;

    const normalTexture = new Texture('./textures/metal/metalNormal1k.jpg', this.scene);
    normalTexture.uScale = uvScale;
    normalTexture.vScale = uvScale;

    const specTexture = new Texture('./textures/metal/metalSpec1k.jpg', this.scene);
    specTexture.uScale = uvScale;
    specTexture.vScale = uvScale;

    const aoTexture = new Texture('./textures/metal/metalAO1k.jpg', this.scene);
    aoTexture.uScale = uvScale;
    aoTexture.vScale = uvScale;

    ballMaterial.diffuseTexture = diffuseTexture;
    ballMaterial.bumpTexture = normalTexture;
    ballMaterial.specularTexture = specTexture;
    ballMaterial.ambientTexture = aoTexture;

    ballMaterial.invertNormalMapX = true;
    ballMaterial.invertNormalMapY = true;

    ballMaterial.specularPower = 5;

    return ballMaterial;
  }
}

export default Ball;
