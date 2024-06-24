import React from 'react';
import {Box} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const NewRobot = ( {position = [0,0,0], width = 10}) => {

    return (
    <div style={{ position: 'relative', height: '100vh' }}>
    <Canvas>
    <OrbitControls
           enableDamping={false}
           initialZoom={1000}
           maxPolarAngle={ Math.PI / 2}
           enableZoom={true}
           maxDistance={1020}
           zoomToCursor={true}
           minDistance={-100}
         />
        <group position = {position}>

        {/* <RoundedBox
              position={[0,1,0]}
              args={[1, 0.4, 1]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.05} // Radius of the rounded corners. Default is 0.05
              smoothness={4} // The number of curve segments. Default is 4
              bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
              <meshPhongMaterial color="#f3f3f3"  />
        </RoundedBox> */}

        <RoundedBox
              position={[0,0,0]}
              args={[1, 2, 1]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.05} // Radius of the rounded corners. Default is 0.05
              smoothness={4} // The number of curve segments. Default is 4
              bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
              <meshPhongMaterial color="#f3f3f3" wireframe />
        </RoundedBox>

        <RoundedBox
              position={[0,-1,0]}
              args={[1, 0.4, 1]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.05} // Radius of the rounded corners. Default is 0.05
              smoothness={4} // The number of curve segments. Default is 4
              bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
              <meshPhongMaterial color="#f3f3f3"  />
        </RoundedBox>


        </group>
    </ Canvas>
    </div>
    )
}

export default NewRobot;






// const walls = [
//   { position: [x+halfLength, y, z], args: [length, height, 0.1], color: color }, // Back Wall
//   { position: [x+halfLength, y, z + width], args: [length, height, 0.1], color: color }, // Front Wall
//   { position: [x, y, z+halfWidth], args: [0.1, height, width], color: color }, // Left Wall
//   { position: [x+length, y, z+halfWidth], args: [0.1, height, width], color: color }, // Right Wall
//   { position: [x+halfLength, y+height/2, z+halfWidth], args: [length, 0.1, width], color: color }, // Top Wall
//   { position: [x+halfLength, y-height/2, z+halfWidth], args: [length, 0.1, width], color: color }, // Bottom Wall
//  ];
 
//  return (
//   <>
//      {walls.map((wall, index) => (
//        <Box key={index} position={wall.position} args={wall.args} material-color={wall.color} />
//      ))}
//   </>
//  );
 