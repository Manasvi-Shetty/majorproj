import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './App.css'

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState("logo192.png");

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
        <h1>Fwish App</h1>
        <Card className="fishCard" style={{ width: "60%" }}>
          <div>
            <img
              src={imagePreview}
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                marginBottom: "20px",
              }}
              alt="ImagePreview"
            />
            <br />
          </div>
          <Card.Title>Insert your fish image to get amazing results</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <div className="btnbox">
            <label
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                backgroundColor: "#3498db",
                color: "white",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Upload 🐡
              <Button
               
                as="input"
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <Button className="succesBtn" variant="success">Get Result 😁</Button>{" "}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ImageUpload;
