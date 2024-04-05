import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './App.css'

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState("image1.png");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="mainBox"> 

        <Card className="fishCard" 
        style={{
           width: "40%",
           height: "500px" ,
           marginTop: "6rem"}}>
          <div>
            <img
              src={imagePreview}
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                marginBottom: "20px",
                marginTop: "10px",
                border: "2px solid grey",
                borderRadius: "5px"
              }}
              alt="ImagePreview"
            />
            <br />
          </div>
          <Card.Title>Insert your fish image to detect diseases</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <div className="btnbox">
            <label
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                color: "black",
                border: "3px solid blue",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Upload
              <Button
               
                as="input"
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            <label
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                color: "white",
                background: "green",
                borderRadius: "5px",
                fontSize: "16px",
                marginLeft: "10px"
              }}
            >
             Get result
              <Button
                style={{ display: "none" }}

              />
            </label>
            {/* <Button className="succesBtn" variant="success"> Get Result</Button>{" "} */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ImageUpload;
