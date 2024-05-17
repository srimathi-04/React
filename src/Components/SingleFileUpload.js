import React, { useState } from "react";
import './Uploadfile.css';

const SingleFileUpload = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
   };

   const handleUpload = async () => {
      if (!selectedFile) {
         alert("Please first select a file");
         return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
         // Replace this URL with your server-side endpoint for handling file uploads
         const response = await fetch("https://your-upload-endpoint.com/upload", {
            method: "POST",
            body: formData
         });

         if (response.ok) {
            alert("File upload is  successfully");
         } else {
            alert("Failed to upload the file due to errors");
         }
      } catch (error) {
         console.error("Error while uploading the file:", error);
         alert("Error occurred while uploading the file");
      }
   };

   return (
   <div>
    <section class="recognition-hero">
		<div>
			<div class="head">
				<h1>Turn your Floor plan into <span>a digital plan</span></h1>
				<p>Seamlessly convert a plan image into a full-customizable 3D project</p>
				<button class="browse-file-button">Upload a plan</button>
				<input class="browse-file visually-hidden" type="file" accept="image/jpeg,image/png,image/gif,application/pdf"/>
			</div>

			<div class="before-after" style={{width: "531px", height: "381px"}}>

			    <div class="before-after-before-image" data-width="531" data-height="381"><img src="#" width="531" height="381" alt="" style={{maxwidth: "initial"}}/></div>
                <div class="before-after-after-image" data-width="531" data-height="381" style={{width: "50%"}}><img src="#" width="531" height="381" alt="" style={{maxwidth: "initial"}}/></div>
                <div class="before-after-track" style={{left: "50%"}}>
                <div class="before-after-track-separator"></div>
                <div class="before-after-track-thumb"></div>
            </div>
            </div>
		</div>
	</section>
      <h2>Single File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
   </div>
   );
};
export default SingleFileUpload;