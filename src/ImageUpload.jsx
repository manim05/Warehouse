// import React, { useState } from 'react';
// import axios from 'axios';

// function ImageUploader({ onUploadSuccess }) {
//   const [file, setFile] = useState(null);
//   const [jsonData, setJsonData] = useState({});

//   const onFileChange = event => {
//     setFile(event.target.files[0]);
//   };

//   const onFileUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     axios.post("http://localhost:8080/collegeproject/process", formData)
//   .then(response => {
//     console.log(response.data);
//     setJsonData(response.data);
//     console.log(jsonData);
//   })
//   .catch(error => {
//     console.error('Axios Error:', error);
//   });

    
//   };

//   return (
//     <div>
//       <input type="file" onChange={onFileChange} />
//       <button onClick={onFileUpload}>Upload!</button>
//     </div>
//   );
// }

// export default ImageUploader;



// import React, { useState,useEffect } from 'react';
// import axios from 'axios';

// function ImageUploader({ onUploadSuccess }) {
//   const [file, setFile] = useState(null);
//   const [jsonData, setJsonData] = useState({});

//   useEffect(() => {
//     // console.log(jsonData);
//   }, [jsonData]); // This will log jsonData whenever it changes

//   const onFileChange = event => {
//     setFile(event.target.files[0]);
//   };

//   const setData = (data) => {
//     setJsonData(data)
//   }

//   const onFileUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//       const response = await axios.post("http://localhost:8080/collegeproject/process", formData);
//       console.log(response.data);
//       setData(response.data)
//       // This may not log the updated value immediately due to async nature
//     } catch (error) {
//       console.error('Axios Error:', error);
//     }

//     console.log(jsonData); 
//   };
  

//   return (
//     <div>
//       <input type="file" onChange={onFileChange} />
//       <button onClick={onFileUpload}>Upload!</button>
//     </div>
//   );
// }

// export default ImageUploader;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ImageUploader({ onUploadSuccess }) {
//   const [file, setFile] = useState(null);
//   const [jsonData, setJsonData] = useState({});

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       if (file) {
// //         const formData = new FormData();
// //         formData.append("file", file);
// //         try {
// //           const response = await axios.post("http://localhost:8080/collegeproject/process", formData);
// //           setJsonData(response.data);
// //         //   console.log(jsonData)
// //         } catch (error) {
// //           console.error('Axios Error:', error);
// //         }
// //       }
// //     };

// //     fetchData();
// //     // console.log(jsonData)
// //   }, [file]);


// useEffect(() => {
//     const fetchData = async () => {
//       if (file) {
//         const formData = new FormData();
//         formData.append("file", file);
//         try {
//           const response = await axios.post("http://localhost:8080/collegeproject/process", formData);
//           const jsonData = response.data;
//           setJsonData(jsonData);
//           // Pass jsonData to the parent component
//           onUploadSuccess(jsonData);
//         } catch (error) {
//           console.error('Axios Error:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [file, onUploadSuccess]);

// //   console.log(jsonData)

//   const onFileChange = event => {
//     setFile(event.target.files[0]);
//   };

//   return (
//     <div>
//       <input type="file"  />
//       <button onClick={onFileChange}>Upload!</button>
//     </div>
//   );
// }

// export default ImageUploader;








import React, { useState,useEffect } from 'react';
import axios from 'axios';

function ImageUploader({ onUploadComplete }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("http://localhost:8080/collegeproject/process", formData);
        onUploadComplete(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
        onUploadComplete({ error: "Failed to upload file." });
      }
    }
  };

  // Listen for changes in the file state to trigger the upload
 useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  return (
    <div className='button-container'>
    <button>Choose file</button>
    <input type='file'  onChange={handleFileChange} />
    </div>
  );
}

export default ImageUploader;
