///////////////////////////////////working, necessary fixes. movement, rotation of cam, robot



// import React, { useState, useEffect } from 'react';
// import { Box, useTexture } from '@react-three/drei';
// import { useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const Robot = ({ robot, onPositionUpdate }) => {
//  const { robotId, robotName, coordinates, rheight, rwidth } = robot;

//  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
//  const [position, setPosition] = useState(coordinates[0]);
//  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//  const { scene } = useThree();

//  // Create and attach the camera to the robot
//  useEffect(() => {
//     const camera = new THREE.OrthographicCamera(
//       window.innerWidth / -2,
//       window.innerWidth / 2,
//       window.innerHeight / 2,
//       window.innerHeight / -2,
//       0.1,
//       1000
//     );
//     camera.position.set(100, 0, 0);
//     camera.lookAt(0, 0, 0);
//     scene.add(camera);

//     return () => {
//       scene.remove(camera);
//     };
//  }, [scene]);

//  // Animate the camera to follow the robot
//  useFrame(({ camera }) => {
//     camera.position.set(position.x + 100, position.y, position.z);
//     camera.lookAt(position.x, position.y, position.z);
//  });

//  useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentPositionIndex < coordinates.length - 1) {
//         setCurrentPositionIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 20000);

//     return () => {
//       clearInterval(interval);
//     };
//  }, [coordinates, currentPositionIndex]);

//  useEffect(() => {
//     if (currentPositionIndex < coordinates.length - 1) {
//       const start = {
//         x: parseInt(coordinates[currentPositionIndex].x),
//         y: parseInt(coordinates[currentPositionIndex].y),
//         z: parseInt(coordinates[currentPositionIndex].z),
//       };

//       const end = {
//         x: parseInt(coordinates[currentPositionIndex + 1].x),
//         y: parseInt(coordinates[currentPositionIndex + 1].y),
//         z: parseInt(coordinates[currentPositionIndex + 1].z),
//       };

//       const stepSizeX = 1;
//       const stepSizeY = 1;
//       const stepSizeZ = 1;

//       let currentX = start.x;
//       let currentY = start.y;
//       let currentZ = start.z;

//       // Calculate direction of movement
//       const direction = {
//         x: end.x - start.x,
//         y: end.y - start.y,
//         z: end.z - start.z,
//       };

//       // Adjust rotation based on direction
//       if (direction.x !== 0) {
//         setRotation((prevRotation) => ({
//           ...prevRotation,
//           y: direction.x > 0 ? prevRotation.y + Math.PI / 2 : prevRotation.y - Math.PI / 2,
//         }));
//       } else if (direction.z !== 0) {
//         setRotation((prevRotation) => ({
//           ...prevRotation,
//           y: direction.z > 0 ? prevRotation.y + Math.PI / 2 : prevRotation.y - Math.PI / 2,
//         }));
//       }

//       const moveRobot = () => {
//         let deltaX = end.x - currentX;
//         let deltaY = end.y - currentY;
//         let deltaZ = end.z - currentZ;

//         if (Math.abs(deltaX) < stepSizeX) {
//           currentX = end.x;
//         } else {
//           currentX += Math.sign(deltaX) * stepSizeX;
//         }

//         if (Math.abs(deltaY) < stepSizeY) {
//           currentY = end.y;
//         } else {
//           currentY += Math.sign(deltaY) * stepSizeY;
//         }

//         if (Math.abs(deltaZ) < stepSizeZ) {
//           currentZ = end.z;
//         } else {
//           currentZ += Math.sign(deltaZ) * stepSizeZ;
//         }

//         setPosition({ x: currentX, y: currentY, z: currentZ });
//         onPositionUpdate({ x: currentX, y: currentY, z: currentZ });
//         if (currentX === end.x && currentY === end.y && currentZ === end.z) {
//           clearInterval(moveInterval);
//           if (currentPositionIndex < coordinates.length - 1) {
//             setCurrentPositionIndex((prevIndex) => prevIndex + 1);
//           }
//         }
//       };

//       const moveInterval = setInterval(moveRobot, 16);

//       return () => {
//         clearInterval(moveInterval);
//       };
//     }
//  }, [coordinates, currentPositionIndex]);

//  const length = rwidth;
//  const height = rheight;
//  const robotColor = 'black';

//  return (
//     <Box
//       position={[position.x, position.y, position.z]}
//       rotation={[rotation.x, rotation.y, rotation.z]}
//       args={[length, height * 2, length]}
//       material-color={robotColor}>
//     </Box>
//  );
// };

// export default Robot;






////////// works fine, has a slanting view of the moving object

import React, { useState, useEffect, useRef } from 'react';
import { Box, OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CameraControl = ({robot,selectedRobotId = '2'}) => {
  const { scene, camera } = useThree();

 
  if (selectedRobotId === robotId) {
    useFrame(() => {
      camera.position.set(position.x + 100, position.y + 50, position.z + 100);
      camera.lookAt(position.x, position.y + 25, position.z);
    });
  }
}

const Robot = ({ robot, onPositionUpdate, selectedRobotId = '2' }) => {
  const { robotId, robotName, coordinates, rheight, rwidth, robotColor } = robot;

  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [position, setPosition] = useState(coordinates[0]);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const { scene, camera } = useThree();

 
  if (selectedRobotId === robotId) {
    useFrame(() => {
      camera.position.set(position.x + 200, position.y + 300, position.z + 200);
      camera.lookAt(position.x, position.y + 25, position.z);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPositionIndex < coordinates.length - 1) {
        setCurrentPositionIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, currentPositionIndex]);

  useEffect(() => {
    if (currentPositionIndex < coordinates.length - 1) {
      const start = {
        x: parseInt(coordinates[currentPositionIndex].x),
        y: parseInt(coordinates[currentPositionIndex].y),
        z: parseInt(coordinates[currentPositionIndex].z),
      };

      const end = {
        x: parseInt(coordinates[currentPositionIndex + 1].x),
        y: parseInt(coordinates[currentPositionIndex + 1].y),
        z: parseInt(coordinates[currentPositionIndex + 1].z),
      };

      const stepSizeX = 15;
      const stepSizeY = 15;
      const stepSizeZ = 15;

      let currentX = start.x;
      let currentY = start.y;
      let currentZ = start.z;

      // Calculate direction of movement
      const direction = {
        x: end.x - start.x,
        y: end.y - start.y,
        z: end.z - start.z,
      };

      // Adjust rotation based on direction
      let newRotation = { ...rotation };

      if (direction.x !== 0) {
        newRotation.y = direction.x > 0 ? Math.PI / 2 : -Math.PI / 2;
      } else if (direction.z !== 0) {
        newRotation.y = direction.z > 0 ? 0 : Math.PI;
      }

      setRotation(newRotation);

      const moveRobot = () => {
        let deltaX = end.x - currentX;
        let deltaY = end.y - currentY;
        let deltaZ = end.z - currentZ;

        if (Math.abs(deltaX) < stepSizeX) {
          currentX = end.x;
        } else {
          currentX += Math.sign(deltaX) * stepSizeX;
        }

        if (Math.abs(deltaY) < stepSizeY) {
          currentY = end.y;
        } else {
          currentY += Math.sign(deltaY) * stepSizeY;
        }

        if (Math.abs(deltaZ) < stepSizeZ) {
          currentZ = end.z;
        } else {
          currentZ += Math.sign(deltaZ) * stepSizeZ;
        }

        setPosition({ x: currentX, y: currentY, z: currentZ });
        onPositionUpdate({ x: currentX, y: currentY, z: currentZ });

        if (currentX === end.x && currentY === end.y && currentZ === end.z) {
          clearInterval(moveInterval);
          if (currentPositionIndex < coordinates.length - 1) {
            setCurrentPositionIndex((prevIndex) => prevIndex + 1);
          }
        }
      };

      const moveInterval = setInterval(moveRobot, 16);

      return () => {
        clearInterval(moveInterval);
      };
    }
  }, [coordinates, currentPositionIndex]);


  const length = rwidth;
  const height = rheight;

  return (
    <>
      <Box
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        args={[length, height * 2, length]}
        material-color={robotColor}
      />
    </>
  );
};

export default Robot;




/////////////////////////////////////// new

// import React, { useState, useEffect } from 'react';
// import { Box, useTexture } from '@react-three/drei';
// import { useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const Robot = ({ robot, onPositionUpdate }) => {
//  const { robotId, robotName, coordinates, rheight, rwidth } = robot;

//  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
//  const [position, setPosition] = useState(coordinates[0]);
//  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//  const { scene } = useThree();

//  // Create and attach the camera to the robot
//  useEffect(() => {
//     const camera = new THREE.OrthographicCamera(
//       window.innerWidth / -2,
//       window.innerWidth / 2,
//       window.innerHeight / 2,
//       window.innerHeight / -2,
//       0.1,
//       1000
//     );
//     camera.position.set(100, 0, 0);
//     camera.lookAt(0, 0, 0);
//     scene.add(camera);

//     return () => {
//       scene.remove(camera);
//     };
//  }, [scene]);

//  // Animate the camera to follow the robot
//  useFrame(({ camera }) => {
//     camera.position.set(position.x + 100, position.y, position.z);
//     camera.lookAt(position.x, position.y, position.z);
//  });

//  useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentPositionIndex < coordinates.length - 1) {
//         setCurrentPositionIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 20000);

//     return () => {
//       clearInterval(interval);
//     };
//  }, [coordinates, currentPositionIndex]);

//  useEffect(() => {
//     if (currentPositionIndex < coordinates.length - 1) {
//       const start = {
//         x: parseInt(coordinates[currentPositionIndex].x),
//         y: parseInt(coordinates[currentPositionIndex].y),
//         z: parseInt(coordinates[currentPositionIndex].z),
//       };

//       const end = {
//         x: parseInt(coordinates[currentPositionIndex + 1].x),
//         y: parseInt(coordinates[currentPositionIndex + 1].y),
//         z: parseInt(coordinates[currentPositionIndex + 1].z),
//       };

//       const stepSizeX = 1;
//       const stepSizeY = 1;
//       const stepSizeZ = 1;

//       let currentX = start.x;
//       let currentY = start.y;
//       let currentZ = start.z;

//       // Calculate direction of movement
//       const direction = {
//         x: end.x - start.x,
//         y: end.y - start.y,
//         z: end.z - start.z,
//       };

//       // Adjust rotation based on direction
//       let newRotation = { ...rotation };
//       if (direction.x !== 0) {
//         newRotation.y = direction.x > 0 ? Math.PI / 2 : -Math.PI / 2;
//       } else if (direction.z !== 0) {
//         newRotation.y = direction.z > 0 ? 0 : Math.PI;
//       }
//       setRotation(newRotation);

//       const moveRobot = () => {
//         let deltaX = end.x - currentX;
//         let deltaY = end.y - currentY;
//         let deltaZ = end.z - currentZ;

//         if (Math.abs(deltaX) < stepSizeX) {
//           currentX = end.x;
//         } else {
//           currentX += Math.sign(deltaX) * stepSizeX;
//         }

//         if (Math.abs(deltaY) < stepSizeY) {
//           currentY = end.y;
//         } else {
//           currentY += Math.sign(deltaY) * stepSizeY;
//         }

//         if (Math.abs(deltaZ) < stepSizeZ) {
//           currentZ = end.z;
//         } else {
//           currentZ += Math.sign(deltaZ) * stepSizeZ;
//         }

//         setPosition({ x: currentX, y: currentY, z: currentZ });
//         onPositionUpdate({ x: currentX, y: currentY, z: currentZ });
//         if (currentX === end.x && currentY === end.y && currentZ === end.z) {
//           clearInterval(moveInterval);
//           if (currentPositionIndex < coordinates.length - 1) {
//             setCurrentPositionIndex((prevIndex) => prevIndex + 1);
//           }
//         }
//       };

//       const moveInterval = setInterval(moveRobot, 16);

//       return () => {
//         clearInterval(moveInterval);
//       };
//     }
//  }, [coordinates, currentPositionIndex]);

//  const length = rwidth;
//  const height = rheight;
//  const robotColor = 'black';

//  return (
//     <Box
//       position={[position.x, position.y, position.z]}
//       rotation={[rotation.x, rotation.y, rotation.z]}
//       args={[length, height * 2, length]}
//       material-color={robotColor}>
//     </Box>
//  );
// };

// export default Robot;



// const controls = useRef();
 // Create and attach the camera to the robot
  // if (selectedRobotId === robotId){
  // useEffect(() => {
  //   camera.position.set(100, 0, 0);
  //   camera.lookAt(0, 0, 0);
  //   scene.add(camera);

  //   return () => {
  //     scene.remove(camera);
  //   };
  // }, [scene, camera]);
  // }

  // Animate the camera to follow the robot
  // console.log('debug ',selectedRobotId,' u ',robotId)



    /* <OrbitControls
        enableDamping={false}
        ref={controls}
        initialZoom={1000}
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={true}
        maxDistance={1020}
        zoomToCursor={true}
        // onChange={handleZoom}
        minDistance={-100}
      /> */
