import {
  Color3,
  Mesh, MeshBuilder, StandardMaterial, Texture, Vector3,
} from '@babylonjs/core';
import Base from '../Base/Base';
import * as types from './types';

/*
diameters
солнце 1.400.000
земля 13.000
меркурий 5.000
венера 12.000
марс 7.000
юпитер 140.000
сатурн 116.000
уран 51.000
нептун 50.000
плутон 2.000
*/

class Planet extends Base {
  planet: Mesh

  private material: types.PlanetMaterial;

  private name: string;

  private diameter: number;

  private radius: number;

  private rotateSpeed: number

  private moveSpeed: number;

  private angle: number;

  private sellLit: boolean;

  constructor({
    scene,
    material,
    name,
    rotateSpeed,
    moveSpeed,
    angle,
    diameter,
    radius,
    selfLit,
  }: types.PlanetProps) {
    super({ scene });

    this.diameter = diameter;
    this.radius = radius;

    this.name = name;
    this.rotateSpeed = rotateSpeed;
    this.moveSpeed = moveSpeed;
    this.angle = angle;
    this.material = material;
    this.sellLit = Boolean(selfLit);
    this.planet = this.createPlanet();
  }

  private createPlanet = (): Mesh => {
    const planet = MeshBuilder.CreateSphere(
      this.name,
      { diameter: this.diameter },
      this.scene,
    );

    planet.position = new Vector3(this.radius, 0, 0);
    planet.material = this.createMaterial();
    planet.receiveShadows = true;

    return planet;
  }

  private createMaterial = (): StandardMaterial => {
    const planetMaterial = new StandardMaterial(`${this.name}Material`, this.scene);

    const diffuseTexture = new Texture(this.material.diffuseTexturePath, this.scene);
    const normalTexture = new Texture(this.material.bumpTexturePath, this.scene);
    const specTexture = new Texture(this.material.specularTexturePath, this.scene);
    const aoTexture = new Texture(this.material.ambientTexturePath, this.scene);

    planetMaterial.diffuseTexture = diffuseTexture;

    planetMaterial.bumpTexture = normalTexture;
    planetMaterial.specularTexture = specTexture;
    planetMaterial.ambientTexture = aoTexture;

    if (this.sellLit) {
      planetMaterial.emissiveColor = new Color3(1, 1, 1);
    }

    return planetMaterial;
  }

  rotate = () => {
    this.planet.rotation.x += this.rotateSpeed;
    this.planet.rotation.y += this.rotateSpeed;

    if (this.moveSpeed) {
      this.planet.position.x = this.radius * Math.sin(this.angle);
      this.planet.position.z = this.radius * Math.cos(this.angle);
      this.angle += this.moveSpeed;
    }
  }
}

export default Planet;
