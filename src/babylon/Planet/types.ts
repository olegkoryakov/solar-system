import { BaseProps } from '../Base/types';

export interface PlanetProps extends BaseProps {
  selfLit?: boolean;
  material: {
    diffuseTexturePath: string;
    bumpTexturePath: string;
    specularTexturePath: string;
    ambientTexturePath: string;
  }
  name: string;
  rotateSpeed: number,
  moveSpeed: number,
  angle: number,
  diameter: number;
  radius: number;
}

export interface PlanetMaterial {
  diffuseTexturePath: string;
  bumpTexturePath: string;
  specularTexturePath: string;
  ambientTexturePath: string;
}
