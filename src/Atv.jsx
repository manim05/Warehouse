import * as THREE from 'three';
import React, { useRef, useEffect , useState } from 'react';
import { Canvas , useLoader} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera ,OrthographicCamera} from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import EntireRoom from './EntireRoom';
import Room from './Room';
import Aisle from './Aisle';
import { Box } from '@react-three/drei';
import {useThree, useFrame} from '@react-three/fiber'
import './styles.css'


const Robot = ({ robot, onPositionUpdate }) => {
    const { robotId, robotName, coordinates, rheight, rwidth , robotColor} = robot;
    const obj = useLoader(OBJLoader, 'mani.obj');
    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
    const [position, setPosition] = useState(coordinates[0]);
    const [isMoving, setIsMoving] = useState(true); // State to control movement
    const [currentX, setCurrentX] = useState(parseInt(coordinates[0].x));
    const [currentY, setCurrentY] = useState(parseInt(coordinates[0].y));
    const [currentZ, setCurrentZ] = useState(parseInt(coordinates[0].z));
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (isMoving && currentPositionIndex < coordinates.length - 1) {
          setCurrentPositionIndex((prevIndex) => prevIndex + 1);
        }
      }, 15000);
  
      return () => {
        clearInterval(interval);
      };
    }, [coordinates, currentPositionIndex, isMoving]);
  
    useEffect(() => {
      if (currentPositionIndex < coordinates.length) {
        const start = {
          x: parseInt(coordinates[currentPositionIndex].x),
          y: parseInt(coordinates[currentPositionIndex].y),
          z: parseInt(coordinates[currentPositionIndex].z),
        };
  
        const end =
          currentPositionIndex < coordinates.length - 1
            ? {
                x: parseInt(coordinates[currentPositionIndex + 1].x),
                y: parseInt(coordinates[currentPositionIndex + 1].y),
                z: parseInt(coordinates[currentPositionIndex + 1].z),
              }
            : start;
  
        const stepSizeX = parseInt(coordinates[currentPositionIndex].rSpeed) || 1;
        const stepSizeY = parseInt(coordinates[currentPositionIndex].rSpeed) || 1;
        const stepSizeZ = parseInt(coordinates[currentPositionIndex].rSpeed) || 1;
  
        const moveRobot = () => {
          const deltaX = end.x - currentX;
          const deltaY = end.y - currentY;
          const deltaZ = end.z - currentZ;
  
          if (Math.abs(deltaX) > stepSizeX) {
            setCurrentX((prevX) => prevX + (deltaX > 0 ? stepSizeX : -stepSizeX));
          } else {
            setCurrentX(end.x);
          }
  
          if (Math.abs(deltaY) > stepSizeY) {
            setCurrentY((prevY) => prevY + (deltaY > 0 ? stepSizeY : -stepSizeY));
          } else {
            setCurrentY(end.y);
          }
  
          if (Math.abs(deltaZ) > stepSizeZ) {
            setCurrentZ((prevZ) => prevZ + (deltaZ > 0 ? stepSizeZ : -stepSizeZ));
          } else {
            setCurrentZ(end.z);
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
    }, [coordinates, currentPositionIndex, isMoving, currentX, currentY, currentZ]);
  
  
  
  
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        setIsMoving((prevIsMoving) => !prevIsMoving);
      }
    };
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
  
    
    const length = rwidth;
    const height = rheight;
  
    return (
      <group>
      <Box
        position={[position.x, position.y, position.z]}
        args={[length, height * 2, length]}
        material-color={robotColor}
      />
      </group>
    );
     
  };

  

const findNearAisles = (robotPosition, aisles, minDistanceThreshold, maxNearbyAisles) => {
    const nearAisleIds = [];
  
    for (const aisle of aisles) {
      const { aisleId, position, rowCnt, rowwidth, rowLength} = aisle;
      
      const rowCount = rowCnt;
      const aisleWidth = rowwidth * rowCount;
      const aisleLength = rowLength;
  
      const topLeftX = position[0];
      const topLeftZ = position[2];
      const bottomRightX = position[0] + aisleLength;
      const bottomRightZ = position[2] + aisleWidth;
  
      // Check if robot is within the boundaries of the aisle
      if (
        robotPosition.x >= topLeftX - minDistanceThreshold/2 &&
        robotPosition.x <= bottomRightX + minDistanceThreshold/2 &&
        robotPosition.z >= topLeftZ - minDistanceThreshold/2 &&
        robotPosition.z <= bottomRightZ + minDistanceThreshold/2
      ) {
        nearAisleIds.push(aisleId);
        if (nearAisleIds.length >= maxNearbyAisles) {
          break; 
        }
      }
    }
  
    return nearAisleIds;
  };
  
  
const Atv = (props) => {

    const jsonData = props.data;
    const { aisle, entireroom, room, robot } = jsonData;
    const { length, width, height } = entireroom;
   
    const controls = useRef();
    const [robotPositions, setRobotPositions] = useState({}); // Adjusted to handle multiple robots
   
    useEffect(() => {
       console.log(aisle,robot);
    }, []);
   
    const handleZoom = () => {
       const camera = controls.current.object;
       console.log("Camera Position:", camera.position.toArray());
       console.log("Camera Rotation:", camera.rotation.toArray());
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
   
    

return (
    <div style={{ display: 'flex', height: '100vh', backgroundImage: 'url(bgImage.jpg)' }}>
     <div style={{ flex: '0 0 10%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRight: '1px solid #ccc' }}> 
        <div style={{ marginBottom: '20px' }}>
         <label htmlFor="robotSelect">Select Robot:</label>
         <select id="robotSelect" style={{ marginLeft: '10px' }}>
           {robot && robot.map((robot, index) => (
             <option key={index} value={robot.robotId}>Robot {robot.robotId}</option>
           ))}
         </select>
       </div>
  
     
       </div>
    
  
  
  
      {/* Main Canvas */}
      <div style={{ flex: '1', position: 'relative' }}>
        <Canvas style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgb(10, 10, 50) 0%,rgb(60, 10, 60) 100%)' }}>
          <ambientLight />
          <PerspectiveCamera
            makeDefault
            position={[0,1120,0]}
            rotation={[-1.5636345867838892, 0.0000031273628530415463, 0.0004366689074517221]}
            fov={70}
          />
          <OrbitControls
            enableDamping={false}
            ref={controls}
            initialZoom={1000}
            maxPolarAngle={Math.PI / 2}
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
              aisleId={aisle.aisleId}
              bayCnt={aisle.bayCnt}
              position={aisle.position}
              rowCnt={aisle.rowCnt}
              rowwidth={aisle.rowwidth}
              rowLength={aisle.rowLength}
              rowHeight={aisle.rowHeight}
              tierCnt={aisle.tierCnt}
              aisleLength={aisle.aisleLength}
              aisleWidth={aisle.aisleWidth}
              splitByWidth={aisle.splitByWidth}
            />
          ))}
          {room && room.length > 0 && room.map((room) => (
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
   
   export default Atv;
  
  