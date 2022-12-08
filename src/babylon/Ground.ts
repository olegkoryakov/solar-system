import {
  GroundMesh, MeshBuilder, Scene, StandardMaterial, Texture, Vector3,
} from '@babylonjs/core';
import Base from './Base';
import * as helpers from './helpers';

class Ground extends Base {
  private ground: GroundMesh

  constructor(scene: Scene) {
    super(scene);

    this.ground = this.createGround();
  }

  createGround = (): GroundMesh => {
    const ground = MeshBuilder.CreateGround(
      helpers.DICTIONARY.GROUND,
      { width: 10, height: 10 },
      this.scene,
    );

    ground.material = this.createGroundMaterial();

    ground.position = new Vector3(0, 0, 0);

    return ground;
  }

  createGroundMaterial = (): StandardMaterial => {
    const groundMaterial = new StandardMaterial(helpers.DICTIONARY.GROUND_MATERIAL, this.scene);
    const uvScale = 4;

    const diffuseTexture = new Texture('./textures/cobblestone/cobblestoneDiffuse1k.jpg', this.scene);
    diffuseTexture.uScale = uvScale;
    diffuseTexture.vScale = uvScale;

    const normalTexture = new Texture('./textures/cobblestone/cobblestoneNormal1k.jpg', this.scene);
    normalTexture.uScale = uvScale;
    normalTexture.vScale = uvScale;

    const specTexture = new Texture('./textures/cobblestone/cobblestoneSpec1k.jpg', this.scene);
    specTexture.uScale = uvScale;
    specTexture.vScale = uvScale;

    const aoTexture = new Texture('./textures/cobblestone/cobblestoneAO1k.jpg', this.scene);
    aoTexture.uScale = uvScale;
    aoTexture.vScale = uvScale;

    groundMaterial.diffuseTexture = diffuseTexture;
    groundMaterial.bumpTexture = normalTexture;
    groundMaterial.specularTexture = specTexture;
    groundMaterial.ambientTexture = aoTexture;

    return groundMaterial;
  }
}

export default Ground;
