import React from 'react';
import { Box , Text} from '@react-three/drei';

const EntireRoom = ({ length, width, height}) => {
  const halfLength = length / 2;
  const halfwidth = width / 2;
  const floorColor = '#cccccc' ;

  return (
    <>
      {/* Back Wall  */}
      {/* <Box position={[0, 0 - 0.3, -halfwidth]} args={[length, height, 0.1]} /> */}

      {/* Front Wall */}
      {/* <Box position={[0, 0 - 0.3, halfwidth]} args={[length, height, 0.1]} /> */}

      {/* Left Wall */}
      {/* <Box position={[-halfLength , 0 -0.3, 0]} args={[0.1, height, width]} /> */}

      {/* Right Wall */}
      {/* <Box position={[halfLength, 0 - 0.3, 0]} args={[0.1, height, width]} /> */}

      {/* Floor */}
      <Box position={[0, -height / 2 - 0.3, 0]} args={[length, 0.1, width]} material-color={floorColor} />
    
    </>

  );
};

export default EntireRoom;











