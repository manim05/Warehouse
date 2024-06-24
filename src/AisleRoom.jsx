////////////// working movement well with arrows,


// import * as THREE from 'three';
// import React, { useRef, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// import EntireRoom from './EntireRoom';
// import Room from './Room';
// import Aisle from './Aisle';

// const AisleRoom = (props) => {

//   const jsonData = props.data;
//   const { aisle, entireroom, room } = jsonData;
//   const { length, width, height } = entireroom;

//   const controls = useRef();

//   const handleZoom = () => {
//     const camera = controls.current.object;
//     console.log("Camera Position:", camera.position.toArray());
//     console.log("Camera Rotation:", camera.rotation.toArray());
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const camera = controls.current.object;
//       const speed = 10; // Adjust this value to control the movement speed

//       switch (e.key) {
//         case 'ArrowUp':
//           camera.position.z -= speed;
//           break;
//         case 'ArrowDown':
//           camera.position.z += speed;
//           break;
//         case 'ArrowLeft':
//           camera.position.x -= speed;
//           break;
//         case 'ArrowRight':
//           camera.position.x += speed;
//           break;
//         default:
//           break;
//       }

//       // Update rotation to look at the center of the room
//       const lookAtPosition = new THREE.Vector3(0, 5, 0);
//       camera.lookAt(lookAtPosition);
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'relative', height: '100vh' }}>
//       <Canvas shadows>
//         <ambientLight />
//         <PerspectiveCamera 
//           makeDefault 
//           position={[0.0029850420235565164, 5, 6.835763277458009]} 
//           rotation={[-1.5636345867838892, 0, 0]}  // Setting initial angle
//           fov={70} 
//         />
//         <OrbitControls   
//           enableDamping={false} 
//           ref={controls}
//           initialZoom={1000}
//           maxPolarAngle={Math.PI / 2.2}
//           enableZoom={true}
//           maxDistance={1020}
//           zoomToCursor={true}
//           onChange={handleZoom}
//         />

//         <EntireRoom position={[0, 0, 0]} length={length} width={width} height={height} />

//         {aisle.map((aisle, index) => (
//           <Aisle
//             key={index}
//             aisleId={index}
//             bayCnt={aisle.bayCnt}
//             position={aisle.position}
//             rowCnt={aisle.rowCnt}
//             rowwidth={aisle.rowwidth}
//             rowLength={aisle.rowLength}
//             rowHeight={aisle.rowHeight}
//             tierCnt={aisle.tierCnt}
//           />
//         ))}

//         {room.map((room) => (
//           <Room
//             key={room.id}
//             position={room.position}
//             length={room.length}
//             width={room.width}
//             height={room.height}
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// };

// export default AisleRoom;



// working, slanting view when the robot moves

import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';

import { useThree, useFrame } from '@react-three/fiber';
import EntireRoom from './EntireRoom';
import Room from './Room';
import Aisle from './Aisle';
import Robot from './Robot';

const findNearAisles = (robotPosition, aisles, minDistanceThreshold, maxNearbyAisles) => {
  const nearAisleIds = [];

  for (const aisle of aisles) {
    const { aisleId, position, rowCnt, rowwidth, rowLength } = aisle;

    const rowCount = rowCnt;
    const aisleWidth = rowwidth * rowCount;
    const aisleLength = rowLength;

    const topLeftX = position[0];
    const topLeftZ = position[2];
    const bottomRightX = position[0] + aisleLength;
    const bottomRightZ = position[2] + aisleWidth;

    // Check if robot is within the boundaries of the aisle
    if (
      robotPosition.x >= topLeftX - minDistanceThreshold / 2 &&
      robotPosition.x <= bottomRightX + minDistanceThreshold / 2 &&
      robotPosition.z >= topLeftZ - minDistanceThreshold / 2 &&
      robotPosition.z <= bottomRightZ + minDistanceThreshold / 2
    ) {
      nearAisleIds.push(aisleId);
      if (nearAisleIds.length >= maxNearbyAisles) {
        break; // Exit loop if max nearby aisles reached
      }
    }
  }

  return nearAisleIds;
};



const aislePosition = (aisles) => {
  const aislePositions = []; // Initialize an empty array

  for (const aisle of aisles) {
    const currentAisle = aisle;
    const id = aisle.aisleId;
    const rowCount = currentAisle.rowCnt;
    const aisleWidth = currentAisle.rowwidth * rowCount;
    const aisleLength = currentAisle.rowLength;
    const position = currentAisle.position;

    aislePositions.push([id, position[0], position[2], position[0] + aisleLength, position[2] + aisleWidth]);
  }

  return aislePositions;
}


const AisleRoom = (props) => {

  const jsonData = props.data;
  const { aisle, entireroom, room, robot } = jsonData;
  const { length, width, height } = entireroom;

  const controls = useRef();
  const [robotPositions, setRobotPositions] = useState({});
  const [nearAisleIds, setNearAisleIds] = useState(['Loading...']);

  console.log(robotPositions)
  
  const [selectedRobotId, setSelectedRobotId] = useState('2'); // State to manage the selected robot


  useEffect(() => {
    // console.log(aisle);
  }, []);

  const handleZoom = () => {
    // const camera = controls.current.object;
    // var azimuthalAngle = controls.getAzimuthalAngle();
    // object.rotation.y = azimuthalAngle;
    // console.log(camera)
    // console.log("Camera Position:", camera.position.toArray());
    // console.log("Camera Rotation:", camera.rotation.toArray());
    // console.log(azimuthalAngle,'  qwertyui')
  };

  const updateRobotPosition = (robotId, position) => {
    setRobotPositions(prevPositions => ({
      ...prevPositions,
      [robotId]: {
        position,
        nearAisleIds: findNearAisles(position, jsonData.aisle, 200, 4) // Example: minDistanceThreshold = 200, maxNearbyAisles = 3
      }
    }));
  };

  useEffect(() => {
    // This effect will run whenever robotPositions changes
    console.log("Updated Robot Positions:", robotPositions); // Debugging line
    // Here you can call any function or trigger any action that needs the updated robotPositions
  }, [robotPositions]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundImage: 'url(bgImage.jpg)' }}>
      {/* <div style={{ flex: '0 0 10%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRight: '1px solid #ccc' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="robotSelect">Select Robot:</label>
          <select id="robotSelect" style={{ marginLeft: '10px' }} onChange={(e) => setSelectedRobotId(e.target.value)}>
        {robot && robot.map((robot, index) => (
         
          <option key={index} value={robot.robotId}>Robot {robot.robotId}</option>
        ))}
      </select>
        </div>
      </div>  */}




      {/* Main Canvas */}
      <div style={{ flex: '1', position: 'relative' }}>

        <Canvas style={{
          width: '100%',
          height: '100vh',
          background: 'linear-gradient(to bottom, rgb(10, 10, 50) 0%,rgb(60, 10, 60) 100%)',
          verticalAlign: 'middle'
        }}>
          <ambientLight />
          <PerspectiveCamera
            makeDefault
            position={[0.0029850420235565164, 954.4672658601626, 6.835763277458009]}
            rotation={[-1.5636345867838892, 0.0000031273628530415463, 0.0004366689074517221]}  // Setting initial angle
            fov={70}
          />
          <OrbitControls
            enableDamping={false}
            // ref={controls}
            initialZoom={1000}
            maxPolarAngle={Math.PI / 2.5}
            enableZoom={true}
            maxDistance={1020}
            zoomToCursor={true}
            onChange={handleZoom}
            minDistance={-100}
          />


          <EntireRoom position={[0, 0, 0]} length={length} width={width} height={height} />
          {aisle.map((aisle, index) => (
            <Aisle
              key={index}
              aisleId={index}
              bayCnt={aisle.bayCnt}
              position={aisle.position}
              rowCnt={aisle.rowCnt}
              rowwidth={aisle.rowwidth}
              rowLength={aisle.rowLength}
              rowHeight={aisle.rowHeight}
              tierCnt={aisle.tierCnt}
            />
          ))}
          {room && room.map((room) => (
            <Room
              key={room.id}
              position={room.position}
              length={room.length}
              width={room.width}
              height={room.height}
            />
          ))}

          {robot && robot.length > 0 && robot.map((robot) => (
            <Robot key={robot.robotId} robot={robot} onPositionUpdate={(position) => updateRobotPosition(robot.robotId, position)} />
          ))}
         {/* <CameraControl selectedRobotId={selectedRobotId} robot={robotPositions} />  */}
        </Canvas>
        {/* UI for displaying robot positions */}
        {robot && robot.length > 0 && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
            {Object.entries(robotPositions).map(([robotId, { position }]) => (
              <div key={robotId}>
                <strong>Robot {robotId} Position:</strong> X: {position.x.toFixed(2)}, Y: {position.y.toFixed(2)}, Z: {position.z.toFixed(2)}
              </div>
            ))}
          </div>
        )}

        {/* UI for displaying near aisles */}
        {robot && robot.length > 0 && (
          <div style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
            {Object.entries(robotPositions).map(([robotId, { nearAisleIds }]) => (
              <div key={robotId}>
                <strong>Robot {robotId} Near Aisles:</strong> {nearAisleIds.join(', ')}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AisleRoom;









// <Robot position = {[850,0,-50]} aislePos = {aislePositions}/> 
// <Robot  position = {[0,0,500]} aislePos = {aislePositions}/>
// <Robot  position = {[0,0,-500]} aislePos = {aislePositions}/>
// <Robot  position = {[500,0,-500]} aislePos = {aislePositions}/>
// <Robot  position = {[-500,0,-500]} aislePos = {aislePositions}/>
// <Robot  position = {[500,0,0]} aislePos = {aislePositions}/>
// <Robot  position = {[-500,0,0]} aislePos = {aislePositions}/> 
