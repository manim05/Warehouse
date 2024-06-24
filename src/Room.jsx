import React from 'react';
import { Box } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three'

const Room = ({ position, length, width, height = 50 }) => {

  const halfLength = length / 2;
  const halfWidth = width / 2;
  const color = 'black'
  const gradientString = 'linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )';;



  // Function to create a gradient texture from a CSS gradient string
const createGradientTexture = (gradientString) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  gradient.addColorStop(0, 'rgba(238,113,113,1)');
  gradient.addColorStop(0.58, 'rgba(246,215,148,1)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 100, 100);
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Create the gradient texture
const gradientTexture = createGradientTexture(gradientString);

 const gradientMaterial = new THREE.MeshStandardMaterial({ map: gradientTexture });

  const [x, y, z] = position;

  return (
    <>
      {/* Back Wall */}
      <Box position={[x+halfLength, y, z ]} args={[length, height, 0.1]}  material-color={color}  />
      {/* <pointLight position={[0, 0, 1]} intensity={1000} /> */}
      {/* Front Wall */}
      <Box position={[x+halfLength, y, z + width]} args={[length, height, 0.1]} material-color={color}  />

      {/* Left Wall */}
      {/* <Box position={[x, y, z+halfWidth ]} args={[0.1, height, width]}  material-color={color}  />

      {/* Right Wall */}
      {/* <Box position={[x+length, y, z+halfWidth ]} args={[0.1, height, width]} material-color={color} /> */} 
    </>
  );
};

export default Room;

