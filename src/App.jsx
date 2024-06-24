// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AisleRoom from './AisleRoom'
import jsonData from './AisleData'
import jsonData2 from './AisleData2';
// import AisleRoomTV from './AisleRoomTV';
// import { Canvas } from '@react-three/fiber';
// import NewRobot from './NewRobot';
// import Atv from './Atv';
// import ImageUploader from './ImageUpload';
// // import convertAisleData from './convertData';


const newData = {"entireroom":{"width":775,"height":540},"aisles":[{"rack_count":6,"x":31,"width":487,"y":28,"Aisle_id":"A1","height":67},{"rack_count":6,"x":31,"width":487,"y":134,"Aisle_id":"A2","height":67},{"rack_count":6,"x":31,"width":487,"y":237,"Aisle_id":"A3","height":67},{"rack_count":6,"x":31,"width":487,"y":340,"Aisle_id":"A4","height":67},{"rack_count":6,"x":31,"width":487,"y":444,"Aisle_id":"A5","height":66},{"rack_count":7,"x":555,"width":77,"y":28,"Aisle_id":"A6","height":482},{"rack_count":7,"x":669,"width":77,"y":28,"Aisle_id":"A7","height":482}]}

const newData5 = {aisles : [{"rack_count":7,"aisle_id":"A01","racks":[{"x":48,"width":96,"y":41,"height":82},{"x":48,"width":96,"y":126,"height":83},{"x":48,"width":96,"y":212,"height":82},{"x":48,"width":96,"y":297,"height":83},{"x":48,"width":96,"y":383,"height":82},{"x":48,"width":96,"y":468,"height":83},{"x":48,"width":96,"y":554,"height":83}],"x":48,"width":96,"y":41,"height":596},

{"rack_count":7,"aisle_id":"A02","racks":[{"x":190,"width":95,"y":43,"height":82},{"x":190,"width":95,"y":128,"height":83},{"x":190,"width":95,"y":214,"height":82},{"x":190,"width":95,"y":299,"height":83},{"x":190,"width":95,"y":385,"height":83},{"x":190,"width":95,"y":471,"height":82},{"x":190,"width":95,"y":556,"height":83}],"x":190,"width":95,"y":43,"height":596},

{"rack_count":3,"aisle_id":"A03","racks":[{"x":331,"width":98,"y":41,"height":82},{"x":432,"width":98,"y":41,"height":82},{"x":533,"width":98,"y":41,"height":82}],"x":331,"width":300,"y":41,"height":82},

{"rack_count":3,"aisle_id":"A04","racks":[{"x":331,"width":98,"y":169,"height":83},{"x":432,"width":98,"y":169,"height":83},{"x":533,"width":98,"y":169,"height":83}],"x":331,"width":300,"y":169,"height":83},

{"rack_count":3,"aisle_id":"A05","racks":[{"x":331,"width":98,"y":298,"height":83},{"x":432,"width":98,"y":298,"height":83},{"x":533,"width":98,"y":298,"height":83}],"x":331,"width":300,"y":298,"height":83},

{"rack_count":3,"aisle_id":"A06","racks":[{"x":331,"width":98,"y":427,"height":83},{"x":432,"width":98,"y":427,"height":83},{"x":533,"width":98,"y":427,"height":83}],"x":331,"width":300,"y":427,"height":83},

{"rack_count":3,"aisle_id":"A07","racks":[{"x":331,"width":98,"y":556,"height":83},{"x":432,"width":98,"y":556,"height":83},{"x":533,"width":98,"y":556,"height":83}],"x":331,"width":300,"y":556,"height":83},

{"rack_count":7,"aisle_id":"A08","racks":[{"x":677,"width":95,"y":41,"height":82},{"x":677,"width":95,"y":126,"height":83},{"x":677,"width":95,"y":212,"height":82},{"x":677,"width":95,"y":297,"height":83},{"x":677,"width":95,"y":383,"height":82},{"x":677,"width":95,"y":468,"height":83},{"x":677,"width":95,"y":554,"height":83}],"x":677,"width":95,"y":41,"height":596},

{"rack_count":7,"aisle_id":"A09","racks":[{"x":818,"width":95,"y":41,"height":83},{"x":818,"width":95,"y":127,"height":82},{"x":818,"width":95,"y":212,"height":83},{"x":818,"width":95,"y":298,"height":82},{"x":818,"width":95,"y":383,"height":83},{"x":818,"width":95,"y":469,"height":83},{"x":818,"width":95,"y":555,"height":82}],"x":818,"width":95,"y":41,"height":596}]
,
  entireroom: {
      'width': 1333,
      'height': 769
  }}

const newData1 = {
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

const data2 = {
  aisles: [
      { "Aisle": "Aisle1", "rack_count": 10, "x": 1101, "width": 59, "y": 127, "height": 534 },
  ],
  entireroom:
    { 'height' : 769,
      'width' : 1333,
    },
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
          height:200
      },
      aisle: [],
      room: [],
      robot: []
  };

  // console.log(width+400,height+200, (width+400)/2, (height+200)/2)

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

  // newData.room.push(parkingRoom)


  const Robot = {
   
            "robotId": "1",
            "robotName": "Robot1",
            "coordinates": [
                // {
                   
                //     "x": - width/2 - 100,
                //     "y": "0",
                //     "z" : - height/2 + 400,
                //     "rSpeed" : 15
                // },      
                 {
                   
                    "x":  - 800,
                    "y": "0",
                    "z" : 10,
                    "rSpeed" : 5
                },
                {   
                  "x": 30,
                  "y": "0",
                  "z" : 10,
                  "rSpeed" : 5
              },
                {
                    "x": 30,
                    "y": "0",
                    "z" : -350,
                    "rSpeed" : 5
                },
            ],
            "rheight": 50,
            "rwidth": 35,
            "objectType": "ROBOT",
            "orientation": "90",
            "robotColor" : "black"
        
  }
  // newData.robot.push(Robot)


  originalData.forEach((aisle, index) => {
      const normalizedX = aisle.x - width / 2;
      const normalizedZ = aisle.y - height / 2;

      const splitByWidth = aisle.width > aisle.height;

      const rowwidth = splitByWidth ? aisle.width / aisle.rack_count : aisle.height / aisle.rack_count;
      const rowLength = splitByWidth ? aisle.height : aisle.width;

      const newAisle = {
          aisleId: aisle.Aisle_id,
          bayCnt: 6,
          position: [
              normalizedX,
              0,
              normalizedZ
          ],
          rowCnt: aisle.rack_count,
          aisleWidth: aisle.width,
          aisleLength: aisle.height,
          rowwidth: rowwidth,
          rowLength: rowLength,

          rowHeight: 200,
          tierCnt: 5,
          splitByWidth: splitByWidth
      };

      newData.aisle.push(newAisle);
  });

  return newData;
};




const newJsonData = convertAisleData(newData);
// console.log(JSON.stringify(newJsonData));




// function App() {

//   const [jsonData, setJsonData] = useState(null);

//   const handleUploadSuccess = (data) => {
//     setJsonData(convertAisleData(data));
//   };


//   return (
//     <Router>
//       <Routes>
//       {/* <Route path="/test" element={
//           <div>
//             <ImageUploader onUploadSuccess={handleUploadSuccess} />
//             {jsonData && <AisleRoom data={jsonData} />}
//           </div>
//         } /> */}

//           <Route path="/test" element={
//           <div>
//             {/* Pass the callback function to ImageUploader */}
//             <ImageUploader onUploadSuccess={handleUploadSuccess} />
//             {/* Render AisleRoom component with jsonData */}
//             {jsonData && <AisleRoomTV data={jsonData} />}
//           </div>
//         } />

//         <Route path="/" element={<AisleRoom data={jsonData2} />} />
//         <Route path="/tv" element={<AisleRoomTV data={jsonData2} />} />
//         <Route path="/tvm" element={<AisleRoomTV data={newJsonData} />} />
//         <Route path="/atv" element={ <Atv data={jsonData2} />} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
// ///

// // function App() {

// //   const [jsonData, setJsonData] = useState(null);

// //   const handleUploadSuccess = (data) => {
// //     setJsonData(data);
// //   };


// //   return (
// //     <Router>
// //       <Routes>
// //       <Route path="/test" element={
// //           <div>
// //             <ImageUploader onUploadSuccess={handleUploadSuccess} />
// //             {jsonData && <AisleRoom data={jsonData} />}
// //           </div>
// //         } />

// //       </Routes>
// //     </Router>
// //   );
// // }


// // export default App;
// ///

// ///



import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AisleRoomTV from './AisleRoomTV'
import ImageUploader from './ImageUpload';
import './styles.css'
import AisleRoom from './AisleRoom';
import './styles.css'
import Atv from './Atv';
import Home from "./Home"

// const convertAisleData = (inputJson) => {
//   console.log(JSON.stringify(inputJson))
//   const originalData = inputJson.aisles;
//   const entireroom = inputJson.entireroom
//   const height = entireroom.height;
//   const width = entireroom.width;

//   const newData = {
//       entireroom: {
//           length: width + 400,
//           width: height + 200,
//           height:200
//       },    
//       aisle: [],
//       room: [],
//       robot: []
//   };

//   originalData.forEach((aisle, index) => {
//       const normalizedX = aisle.x - width / 2;  
//       const normalizedZ = aisle.y - height / 2;

//       const splitByWidth = aisle.width > aisle.height;

//       const rowwidth = splitByWidth ? aisle.width / aisle.rack_count : aisle.height / aisle.rack_count;
//       const rowLength = splitByWidth ? aisle.height : aisle.width;

//       const newAisle = {
//           aisleId: aisle.Aisle_id,
//           bayCnt: 6,
//           position: [
//               normalizedX,
//               0,
//               normalizedZ
//           ],
//           rowCnt: aisle.rack_count,
//           aisleWidth: aisle.width,
//           aisleLength: aisle.height,
//           rowwidth: rowLength,
//           rowLength: rowwidth,

//           rowHeight: 200,
//           tierCnt: 4,
//           splitByWidth: splitByWidth
//       };

//       newData.aisle.push(newAisle);
//   });

//   return newData;
// };


function App() {

  const [uploadData, setUploadData] = useState('');

  const handleUploadComplete = (data) => {
    console.log(JSON.stringify(data))
    setUploadData(convertAisleData(data));
    console.log(JSON.stringify(convertAisleData(data)))
  };

  return (
    <Router>
      <Routes>
      <Route
          path="/test"
          element={
            <div className="app-container">
              <div className="uploader-container">
                <ImageUploader onUploadComplete={handleUploadComplete}  />
              </div>
              <div className="canvas-container">
                {uploadData && <AisleRoomTV data={uploadData} />}
              </div>
            </div>
          }
        />
         <Route path="/" element={<Home/>} />

         <Route path="/t" element={<AisleRoom data={jsonData2} />} />
         <Route path="/tv" element={<AisleRoomTV data={jsonData2} />} />
         <Route path="/tvm" element={<AisleRoomTV data={newJsonData} />} />
         <Route path="/atv" element={ <Atv data={jsonData2} />} />
         <Route path="/o" element={<AisleRoomTV data={convertAisleData(data2)} />} />
      </Routes>
    </Router>
  );
}


export default App;
