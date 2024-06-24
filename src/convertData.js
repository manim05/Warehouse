// const fs = require('fs');

const newData = {
  aisles: [
      {"Aisle": "Aisle1", "rack_count": 10, "x": 87, "width": 534, "y": 601, "height": 59},
      {"Aisle": "Aisle7", "rack_count": 10, "x": 89, "width": 535, "y": 124, "height": 58},
      {"Aisle": "Aisle2", "rack_count": 10, "x": 87, "width": 535, "y": 444, "height": 58},
      {"Aisle": "Aisle3", "rack_count": 10, "x": 87, "width": 535, "y": 285, "height": 58},
      {"Aisle": "Aisle4", "rack_count": 10, "x": 1101, "width": 59, "y": 127, "height": 534},
      {"Aisle": "Aisle5", "rack_count": 10, "x": 948, "width": 59, "y": 127, "height": 534},
      {"Aisle": "Aisle6", "rack_count": 10, "x": 790, "width": 58, "y": 127, "height": 535}

  ],
  entireroom: {
      'width': 1333,
      'height': 769
  }
};

const data = {
  aisles: [
      { "Aisle": "Aisle1", "rack_count": 10, "x": 1101, "width": 59, "y": 127, "height": 534 },
      { "Aisle": "Aisle2", "rack_count": 10, "x": 948, "width": 59, "y": 127, "height": 534 },
      { "Aisle": "Aisle3", "rack_count": 10, "x": 790, "width": 58, "y": 127, "height": 535 },
      { "Aisle": "Aisle4", "rack_count": 10, "x": 638, "width": 58, "y": 127, "height": 535 },
      { "Aisle": "Aisle5", "rack_count": 10, "x": 483, "width": 58, "y": 127, "height": 534 },
      { "Aisle": "Aisle6", "rack_count": 10, "x": 326, "width": 59, "y": 127, "height": 535 },
      { "Aisle": "Aisle7", "rack_count": 10, "x": 166, "width": 59, "y": 127, "height": 535 }
  ],
  entireroom:
    { 'height' : 769,
      'width' : 1333,
    },
};

const convertAisleData = (inputJson) => {
  const originalData = inputJson.aisles;
  const entireroom = inputJson.entireroom
  const height = entireroom.height;
  const width = entireroom.width;

  const newData = {
      entireroom: {
          length: width + 400,
          width: height + 200,
          height:100
      },
      aisle: [],
      room: []
  };

  console.log(width+400,height+200, (width+400)/2, (height+200)/2)

  const parkingRoom = {
    'id' : 'Parking',
    'length' : 120,
    'width' : 350,
    'height': 100,
    "position": [
      - ((width+400) / 2 ) + 75,
      0,
      - ((height+200) / 2 ) /3 ,
    ]
    
  }

  newData.room.push(parkingRoom)

  originalData.forEach((aisle, index) => {
      const normalizedX = aisle.x - width / 2;
      const normalizedZ = aisle.y - height / 2;

      const splitByWidth = aisle.width > aisle.height;

      const rowwidth = splitByWidth ? aisle.width / aisle.rack_count : aisle.height / aisle.rack_count;
      const rowLength = splitByWidth ? aisle.height : aisle.width;

      const newAisle = {
          aisleId: `A${String(index + 1).padStart(2, '0')}`,
          bayCnt: 6,
          position: [
              normalizedX,
              0,
              normalizedZ
          ],
          rowCnt: aisle.rack_count,

          rowwidth: rowLength,
          rowLength: rowwidth,

          rowHeight: 100,
          tierCnt: 4,
          splitByWidth: splitByWidth
      };

      newData.aisle.push(newAisle);
  });

  return newData;
};

export default convertAisleData;



// const filename = 'output.json';

// // Convert JSON object to a string to be written to the file
// const dataToWrite = JSON.stringify(newJsonData, null, 2);

// // Write the data to a file using fs.writeFile
// fs.writeFile(filename, dataToWrite, (err) => {
//     if (err) {
//         console.error('There was an error writing the file:', err);
//     } else {
//         console.log(`Data written successfully to ${filename}`);
//     }
// });

