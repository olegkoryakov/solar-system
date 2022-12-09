import { PlanetProps } from './Planet/types';

type BasePlanetProps = Omit<PlanetProps, 'scene'>;

export const DICTIONARY = {
  CAMERA: 'camera',
  POINT_LIGHT: 'pointLight',
  SKY_BOX: 'skyBox',
  SKY_BOX_MATERIAL: 'skyBoxMaterial',
};

export const MERCURY_BASE_PROPS: BasePlanetProps = {
  name: 'mercury',
  angle: 0,
  diameter: 0.5,
  radius: 3,
  material: {
    diffuseTexturePath: './textures/mercuryMap.jpg',
    bumpTexturePath: './textures/mercuryNormalMap.jpg',
    specularTexturePath: './textures/mercurySpecularMap.jpg',
    ambientTexturePath: './textures/mercuryAOMap.jpg',
  },
  rotateSpeed: 0.01,
  moveSpeed: 0.01,
};

export const VENUS_BASE_PROPS: BasePlanetProps = {
  name: 'venus',
  angle: 0,
  diameter: 0.7,
  radius: 5,
  material: {
    diffuseTexturePath: './textures/venusMap.jpg',
    bumpTexturePath: './textures/venusNormalMap.jpg',
    specularTexturePath: './textures/venusSpecularMap.jpg',
    ambientTexturePath: './textures/venusAOMap.jpg',
  },
  rotateSpeed: 0.011,
  moveSpeed: 0.011,
};

export const EARTH_BASE_PROPS: BasePlanetProps = {
  name: 'earth',
  angle: 0,
  radius: 7,
  diameter: 1,
  material: {
    diffuseTexturePath: './textures/earthMap.jpg',
    bumpTexturePath: './textures/earthNormalMap.jpg',
    specularTexturePath: './textures/earthSpecularMap.jpg',
    ambientTexturePath: './textures/earthAOMap.jpg',
  },
  rotateSpeed: 0.012,
  moveSpeed: 0.012,
};

export const MARS_BASE_PROPS: BasePlanetProps = {
  name: 'mars',
  angle: 0,
  diameter: 0.8,
  radius: 9,
  material: {
    diffuseTexturePath: './textures/marsMap.jpg',
    bumpTexturePath: './textures/marsNormalMap.jpg',
    specularTexturePath: './textures/marsSpecularMap.jpg',
    ambientTexturePath: './textures/marsAOMap.jpg',
  },
  rotateSpeed: 0.013,
  moveSpeed: 0.013,
};

export const SATURN_BASE_PROPS: BasePlanetProps = {
  name: 'saturn',
  angle: 0,
  diameter: 3,
  radius: 11.8,
  material: {
    diffuseTexturePath: './textures/saturnMap.jpg',
    bumpTexturePath: './textures/saturnNormalMap.jpg',
    specularTexturePath: './textures/saturnSpecularMap.jpg',
    ambientTexturePath: './textures/saturnAOMap.jpg',
  },
  rotateSpeed: 0.013,
  moveSpeed: 0.014,
};
export const URANUS_BASE_PROPS: BasePlanetProps = {
  name: 'uranus',
  angle: 0,
  diameter: 2.7,
  radius: 15,
  material: {
    diffuseTexturePath: './textures/uranusMap.jpg',
    bumpTexturePath: './textures/uranusNormalMap.jpg',
    specularTexturePath: './textures/uranusSpecularMap.jpg',
    ambientTexturePath: './textures/uranusAOMap.jpg',
  },
  rotateSpeed: 0.015,
  moveSpeed: 0.018,
};

export const NEPTUNE_BASE_PROPS: BasePlanetProps = {
  name: 'neptune',
  angle: 0,
  diameter: 2.5,
  radius: 18,
  material: {
    diffuseTexturePath: './textures/neptuneMap.jpg',
    bumpTexturePath: './textures/neptuneNormalMap.jpg',
    specularTexturePath: './textures/neptuneSpecularMap.jpg',
    ambientTexturePath: './textures/neptuneAOMap.jpg',
  },
  rotateSpeed: 0.015,
  moveSpeed: 0.015,
};

export const PLUTO_BASE_PROPS: BasePlanetProps = {
  name: 'pluto',
  angle: 0,
  diameter: 2.3,
  radius: 21,
  material: {
    diffuseTexturePath: './textures/plutoMap.jpg',
    bumpTexturePath: './textures/plutoNormalMap.jpg',
    specularTexturePath: './textures/plutoSpecularMap.jpg',
    ambientTexturePath: './textures/plutoAOMap.jpg',
  },
  rotateSpeed: 0.015,
  moveSpeed: 0.019,
};

export const SUN_BASE_PROPS: BasePlanetProps = {
  selfLit: true,
  name: 'sun',
  angle: 0,
  diameter: 2,
  radius: 0,
  material: {
    diffuseTexturePath: './textures/sunMap.jpg',
    bumpTexturePath: './textures/sunNormalMap.jpg',
    specularTexturePath: './textures/sunSpecularMap.jpg',
    ambientTexturePath: './textures/sunAOMap.jpg',
  },
  rotateSpeed: 0.005,
  moveSpeed: 0,
};
