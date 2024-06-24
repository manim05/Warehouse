// import React from 'react';
// import { Box , Text} from '@react-three/drei';

// const WarehouseRack = ({ position, height  ,width , length, numShelves}) => {

//   const [x, y, z] = position;
//   position = [x+length/2,y,z+width/2]

//   const shelfWidth = width; 
//   const rackLength = length;
//   const shelfThickness = 0.1;
//   const rackPartition = 0.1 ;
//   const brownColor = '#8B4513'; 
//   const metalColor = '#F1EF99'; 
//   const sideColor = '#996633'; 
//   const backColor = '#663300'; 

//   const shelfPositions = [
//     { side: "left", position: [0, 0, -rackLength/2], args: [shelfWidth -0.05, height, rackPartition] , color : sideColor },
//     { side: "right", position: [0, 0, rackLength/2] , args: [shelfWidth -0.05, height, rackPartition], color : sideColor },
//     { side: "center", position: [0, 0, 0] , args: [shelfThickness, height, rackLength], color : brownColor },
//     { side: 'topShelf', position: [0, height/2, 0], args: [shelfWidth , shelfThickness, rackLength], color: backColor },
//     { side: 'bottomShelf',position: [0, -height / 2, 0], args: [shelfWidth , 0.2, rackLength], color: backColor }

//   ];


//   const startRange = -height/2;
//   const endRange = height/2;
//   const numPoints = numShelves+1;

//   const resultArray = Array.from({ length: numPoints }, (_, index) => startRange + index * ((endRange - startRange) / (numPoints - 1)));


//   for (let i = 1; i < numShelves; i++) {
//     shelfPositions.push({
//       position: [0, resultArray[i], 0],  
//       args: [shelfWidth-0.1, shelfThickness, rackLength],
//       side: `Shelf ${i + 1}`,
//       color: metalColor
//     });
//   }

//   return (
//     <group position={position} >
//       {shelfPositions.map((shelf) => (
//         <Box key={shelf.side} position={shelf.position} args={shelf.args}>
//           <meshStandardMaterial color={shelf.color} />
//         </Box>
//       ))}
//       {/* <Text position={[0, height / 2 + 5, -0.2]} 
//             fontSize={7} anchorX="center" anchorY="middle" material-color="red" >
//         {`X: ${position[0].toFixed(2)}, Z: ${position[2].toFixed(2)}`}
//       </Text> */}

//     </group>
//   );

// };

// export default WarehouseRack;





// import React from 'react';
// import { Box , Text} from '@react-three/drei';

// const WarehouseRack = ({ position, height  ,width , length, numShelves,splitByWidth}) => {



//   if (!splitByWidth)
//   {
//   const [x, y, z] = position;
//   position = [x+length/2,y,z+width/2]

//   const shelfWidth = width; 
//   const rackLength = length;
//   const shelfThickness = 0.1;
//   const rackPartition = 0.1 ;
//   const brownColor = '#8B4513'; 
//   const metalColor = '#F1EF99'; 
//   const sideColor = '#996633'; 
//   const backColor = '#663300'; 

//   const shelfPositions = [
//     { side: "left", position: [0, 0, -rackLength/2], args: [shelfWidth -0.05, height, rackPartition] , color : sideColor },
//     { side: "right", position: [0, 0, rackLength/2] , args: [shelfWidth -0.05, height, rackPartition], color : sideColor },
//     { side: "center", position: [0, 0, 0] , args: [shelfThickness, height, rackLength], color : brownColor },
//     { side: 'topShelf', position: [0, height/2, 0], args: [shelfWidth , shelfThickness, rackLength], color: backColor },
//     { side: 'bottomShelf',position: [0, -height / 2, 0], args: [shelfWidth , 0.2, rackLength], color: backColor }

//   ];


//   const startRange = -height/2;
//   const endRange = height/2;
//   const numPoints = numShelves+1;

//   const resultArray = Array.from({ length: numPoints }, (_, index) => startRange + index * ((endRange - startRange) / (numPoints - 1)));


//   for (let i = 1; i < numShelves; i++) {
//     shelfPositions.push({
//       position: [0, resultArray[i], 0],  
//       args: [shelfWidth-0.1, shelfThickness, rackLength],
//       side: `Shelf ${i + 1}`,
//       color: metalColor
//     });
//   }

//   return (
//     <group position={position} >
//       {shelfPositions.map((shelf) => (
//         <Box key={shelf.side} position={shelf.position} args={shelf.args}>
//           <meshStandardMaterial color={shelf.color} />
//         </Box>
//       ))}
//       {/* <Text position={[0, height / 2 + 5, -0.2]} 
//             fontSize={7} anchorX="center" anchorY="middle" material-color="red" >
//         {`X: ${position[0].toFixed(2)}, Z: ${position[2].toFixed(2)}`}
//       </Text> */}

//     </group>
//   );
// }


// else{


  
//   const [x, y, z] = position;

//   position = [x+length/2,y,z+width/2]

//   const shelfWidth = width; 
//   const rackLength = length;
//   const shelfThickness = 0.1;
//   const rackPartition = 0.1 ;
//   const brownColor = '#8B4513'; 
//   const metalColor = '#F1EF99'; 
//   const sideColor = '#996633'; 
//   const backColor = '#663300'; 

//   const shelfPositions = [
//     { side: "left", position: [-width/2, 0, 0], args: [shelfThickness, height, rackLength] , color : sideColor },
//     { side: "right", position: [width/2, 0, 0] , args: [shelfThickness, height, rackLength], color : sideColor },
//     { side: "center", position: [0, 0, 0] , args: [shelfWidth -0.05, height, rackPartition], color : brownColor },
//     { side: 'topShelf', position: [0, height/2, 0], args: [shelfWidth , shelfThickness, rackLength], color: backColor },
//     { side: 'bottomShelf',position: [0, -height / 2, 0], args: [shelfWidth , 0.2, rackLength], color: backColor }

//   ];


//   const startRange = -height/2;
//   const endRange = height/2;
//   const numPoints = numShelves+1;

//   const resultArray = Array.from({ length: numPoints }, (_, index) => startRange + index * ((endRange - startRange) / (numPoints - 1)));


//   for (let i = 1; i < numShelves; i++) {
//     shelfPositions.push({
//       position: [0, resultArray[i], 0],  
//       args: [shelfWidth-0.1, shelfThickness, rackLength],
//       side: `Shelf ${i + 1}`,
//       color: metalColor
//     });
//   }

//   return (
//     <group position={position} >
//       {shelfPositions.map((shelf) => (
//         <Box key={shelf.side} position={shelf.position} args={shelf.args}>
//           <meshStandardMaterial color={shelf.color} />
//         </Box>
//       ))}
//       <Text position={[0, height / 2 + 0.2, -0.2]} 
//             fontSize={0.2} anchorX="center" anchorY="middle" material-color="white" >
//         {`X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, Z: ${z.toFixed(2)}`}
//       </Text>

//     </group>
//   );





// }

// };

// export default WarehouseRack;







import React,{useContext,useState,createContext} from 'react';

import { Box, Html, Edges,Text } from '@react-three/drei';
import { Children } from 'react';

const HoverContext = createContext();
const WarehouseRack = ({ position, height, width, length, numShelves, splitByWidth,rackId }) => {
 const {hoveredRack, setHoveredRack } = useContext(HoverContext);
 const [x, y, z] = position;
 position = [x + length / 2, y, z + width / 2];

 const shelfWidth = width;
 const rackLength = length;
 const shelfThickness = 0;
 const rackPartition = 0;
//  const brownColor = '#C08261';
//  const metalColor = '#F2ECBE';
//  const sideColor = '#9A3B3B';
//  const backColor = '#9A3B3B';
const brownColor = '#8C6A5D';
const metalColor = '#F2ECBE';
const sideColor = '#4F4A45';
const backColor = '#4F4A45';

 const shelfPositions = [
    { side: "left", position: splitByWidth ? [-width / 2, 0, 0] : [0, 0, -rackLength / 2], args: splitByWidth ? [shelfThickness, height, rackLength] : [shelfWidth - 0.05, height, rackPartition], color: sideColor },
    { side: "right", position: splitByWidth ? [width / 2, 0, 0] : [0, 0, rackLength / 2], args: splitByWidth ? [shelfThickness, height, rackLength] : [shelfWidth - 0.05, height, rackPartition], color: sideColor },
    { side: "center", position: [0, 0, 0], args: splitByWidth ? [shelfWidth - 0.05, height, rackPartition] : [shelfThickness, height, rackLength], color: brownColor },
    { side: 'topShelf', position: [0, height / 2, 0], args: [shelfWidth, shelfThickness, rackLength], color: backColor },
    { side: 'bottomShelf', position: [0, -height / 2, 0], args: [shelfWidth, 0.2, rackLength], color: backColor }
 ];

 const startRange = -height / 2;
 const endRange = height / 2;
 const numPoints = numShelves + 1;
 const resultArray = Array.from({ length: numPoints }, (_, index) => startRange + index * ((endRange - startRange) / (numPoints - 1)));

 for (let i = 1; i < numShelves; i++) {
    shelfPositions.push({
      position: [0, resultArray[i], 0],
      args: [shelfWidth - 0.1, shelfThickness, rackLength],
      side: `Shelf ${i + 1}`,
      color: metalColor
    });
 }

 return (
    <group position={position}
    onPointerOver={()=> setHoveredRack(rackId)}
    onPointerOut={()=> setHoveredRack(null)}>
      {shelfPositions.map((shelf) => (
        <Box key={shelf.side} position={shelf.position} args={shelf.args}>
          <meshStandardMaterial color={shelf.color} />
          {hoveredRack === rackId && (
            <Edges scale={1.05}>
              <meshBasicMaterial color='yellow'/>
            </Edges>
          )}
        </Box>
      ))}
      {
        hoveredRack === rackId && (
          <Html position={[0, height/2 + 0.5,0]}>
            <div style={{color: 'white',backgroundColor:'black',padding: '2px 5px',borderRadius:'3px'}}>
              {rackId}
            </div>

          </Html>
        )
      }
      {/* <Text position={[0, height / 2 + (splitByWidth ? 0.2 : 5), -0.2]}
            fontSize={splitByWidth ? 0.2 : 7} anchorX="center" anchorY="middle" material-color="white">
        {`X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, Z: ${z.toFixed(2)}`}
      </Text> */}
    </group>
 );
};


const HoverProvider = ({children}) => {
  const [hoveredRack, setHoveredRack] = useState(null)
  return (
    <HoverContext.Provider value={{hoveredRack,setHoveredRack}}>
      {children}</HoverContext.Provider>
  )
}
export  {WarehouseRack,HoverProvider};
