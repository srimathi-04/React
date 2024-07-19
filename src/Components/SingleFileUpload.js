import React, { useState } from "react";
import "./Uploadfile.css";

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
        <div class="site-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="heading-39101 mb-5">
              <span class="subtitle-39191">Discover Plan</span>
              <h3 class="heading">Turn your Floor plan <br/> into a digital plan</h3>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-right">
          <div class="img-comp-container">
  <div class="img-comp-img">
  <img
            src="https://arbulider.netlify.app/img/portfolio/11.jpg"
            alt="Image" class="img-fluid"/>
  </div>
  <div class="img-comp-img img-comp-overlay">
    <img src="https://static.planner5d.com/assets/images/recognition/recognition-how-work-2-2.png" width="300" height="200"/>
  </div>
</div>

				
          </div>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6" data-aos="fade-right">
            <img
            src="https://www.3darchitettura.com/wp-content/uploads/2019/05/roombox.gif"
            alt="Image" class="img-fluid"/>
          </div>
          <div class="col-md-6">
          <div class="heading-39101 mb-5">
          <span class="subtitle-39191">Workflow</span>
              <h2>How does it work?</h2>
            
            <div class='points'>
            <ol>
					<h3>1. Upload a floor plan</h3>
					You can convert your own floor plan from 2D image to 3D scene. Just upload picture with plan!

					<h3>2. Recognized and rendered</h3>
					The plan will be recognized automatically. After recognition, you will receive an email notification.

					<h3>3. The interactive plan is ready</h3>
					Work with the recognized plan as you would with a regular project.

			</ol>
            </div>
            </div>
          </div>
        </div>
      </div><br/><br/>

    <div class="container">
    <div class="row align-items-center">
    <div class="heading-39101 mb-5">
              <h3 class="heading">Convert 2D Floor Plan <br/> to 3D Model</h3>
            </div>
    <div class="col-md-6">
            <img src="https://images2.alphacoders.com/257/257882.jpg" alt="Image" class="img-fluid"/><br/><br/>
            <div class='points'>
                <h4>Uploading Requirements:</h4>
            <ul>
				<p>⦿ Jpeg, PDF and PNG formats are supported.</p>
				<p>⦿ Make sure you upload architectural/blueprint-like images.</p>
				<p>⦿ Feel free to upload floor plan photos and screenshots.</p>
				<p>⦿ Good-quality images ensure faster and better convert.</p>
			</ul>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-right">
          <div class="file">
      <h2>Upload Your File</h2><br/><br/>
      <input type="file" onChange={handleFileChange} />
      <button class="button" onClick={handleUpload}>Upload</button>
    </div>
            
          </div>
          </div>
          </div>
            </div>
	</section>
    
   </div>
   );
};
export default SingleFileUpload;