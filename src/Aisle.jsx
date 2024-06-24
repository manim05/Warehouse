import React from 'react';
import {WarehouseRack, HoverProvider} from './WarehouseRack';
import { Text } from '@react-three/drei';

const Aisle = ({ aisleId, bayCnt, position, rowCnt, rowwidth, rowLength , rowHeight = 30, tierCnt, splitByWidth,aisleLength, aisleWidth }) => {
    
  const [x, y, z] = position;
  const shelfThickness = 0.1;
  // console.log(aisleWidth,aisleLength, 'ertyu')

  const textPosition = splitByWidth? [x + (aisleWidth/2), y + (rowHeight/2) + 0.1, z] : [x, y + (rowHeight/2) + 0.1, z + (aisleLength/2) ];

  const rackPositions = Array.from({ length: rowCnt }, (_, index) => {
    const position = splitByWidth ? [x + index * (rowLength), y, z] : [x, y, z + index * (rowwidth + shelfThickness * 0.2)];
    return position;
   });
   
  return (
    <HoverProvider>
      {/* <Text position={textPosition} // Adjust position as needed
            fontSize={25} // Adjust font size as needed
            anchorX="middle" anchorY="center" 
            material-color="black"
            rotation={[ - Math.PI / 2, 0, 0]} // Rotate text 90 degrees around Y-axis
            >
       
        {aisleId}

      </Text> */}

      {rackPositions.map((rackPosition,index) => (
        <WarehouseRack 
          key={`aisle_${aisleId}_rack${index}`}
          position={rackPosition}
          numShelves={tierCnt} 
          height={rowHeight}
          width={rowLength}
          length={rowwidth}
          bayCnt = {bayCnt}
          splitByWidth = {splitByWidth}
          rackId={`R${index+1} - ${aisleId}`}
        />
      ))}
    </HoverProvider>
  );
};

export default Aisle;





// import React from 'react';
// import WarehouseRack from './WarehouseRack';

// const Aisle = ({ aisleId, bayCnt, position, rowCnt, rowwidth, rowLength, rowHeight = 30, tierCnt, splitByWidth = false }) => {
    
//  const [x, y, z] = position;
//  const shelfThickness = 0.1;

//  // Determine the primary dimension for splitting
//  const primaryDimension = splitByWidth ? rowLength : rowwidth;
//  const secondaryDimension = splitByWidth ? rowwidth : rowLength;

//  // Calculate the position for each rack based on the primary dimension
//  const rackPositions = Array.from({ length: rowCnt }, (_, index) => {
//     const rackZ = z + index * (secondaryDimension + shelfThickness * 0.2);
//     return [x, y, rackZ];
//  });

//  return (
//     <>
//       {rackPositions.map((rackPosition, index) => (
//         <WarehouseRack 
//           key={`aisle_${aisleId}_rack${index}`}
//           position={rackPosition}
//           numShelves={tierCnt} 
//           height={rowHeight}
//           width={secondaryDimension} // Use the secondary dimension for width
//           length={primaryDimension} // Use the primary dimension for length
//           bayCnt={bayCnt}
//         />
//       ))}
//     </>
//  );
// };

// export default Aisle;



// import React, { useEffect } from 'react';
// import WarehouseRack from './WarehouseRack';
// import { Text } from '@react-three/drei';

// const Aisle = ({ aisleId, bayCnt, position, rowCnt, rowwidth, rowLength , rowHeight = 30, tierCnt, splitByWidth = false,aisleLength, aisleWidth }) => {
    
//   const [x, y, z] = position;

//   const textPosition = splitByWidth? [x + (aisleWidth/2) , y + (rowHeight/2) + 0.5, z + 20] : [x + 20, y + (rowHeight/2) + 0.5, z + (aisleLength/2) ];

//   const rackPositions = Array.from({ length: rowCnt }, (_, index) => {
//     const position = splitByWidth ? [x + index * (rowwidth), y, z] : [x, y, z + index * (rowLength )];
//     return position;
//    });
   
//    useEffect(()=>{
//     // console.log(aisleLength,aisleWidth,rowwidth,rowLength,splitByWidth)
//     // console.log(rackPositions);
//    },[])

//   return (
//     <>
//       <Text position={textPosition} 
//             fontSize={25} 
//             anchorX="middle" anchorY="center" 
//             material-color="white"
//             rotation={[ - (Math.PI / 2)  , 0, 0]} 
//             style={{
//                 fontFamily: 'Arial, sans-serif', // Change font family
//                 fontWeight: 'bold', // Make the text bold
//                 fontStyle: 'italic', // Make the text italic
//                 textTransform: 'uppercase', // Convert text to uppercase
//                 letterSpacing: '1px', // Add letter spacing
//                 textDecoration: 'underline', // Add underline
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow
//                 color: 'black', // Change text color
//                 backgroundColor: 'lightgrey', // Change background color
//                 padding: '5px 10px', // Add padding
//                 borderRadius: '5px', // Add border radius
//               }}
//             >
//         {aisleId}
//       </Text>

//       {rackPositions.map((rackPosition,index) => (
//         <WarehouseRack 
//           key={`aisle_${aisleId}_rack${index}`}
//           position={rackPosition}
//           numShelves={tierCnt} 
//           height={rowHeight}
//           width={rowwidth}
//           length={rowLength}
//           bayCnt = {bayCnt}
//           splitByWidth = {splitByWidth}
//         />
//       ))}
//     </>
//   );
// };

// export default Aisle;
