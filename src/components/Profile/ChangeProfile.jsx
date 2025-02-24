import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const ChangeProfile = () => {
  const [formData, setFormData] = useState({
    name: "Taimoor Shahid",
    email: "taimoorshahidswl@gmail.com",
    phone: "+03463244071",
    address: "123 456",
  });
  const [profileImage, setProfileImage] = useState(null); // State to store uploaded image
  console.log(profileImage);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL
      setProfileImage(imageUrl);
    }
  };

  // Open file picker when clicking Avatar
  const handleAvatarClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="container box-shadow p-4 rounded-3 width--500">
      <div className="row text-center mb-4">
        <div className="flex-center ">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="d-none"
            onChange={handleImageUpload}
          />
          <div className=" position-relative">
            <div className="position-absolute bottom-0 end-0   z-3 ">
              <CameraAltIcon
                className="large-camera-icon"
                onClick={handleAvatarClick} // Click to upload image
              />
            </div>
            <Avatar className="custom-avatar" src={profileImage}>
              {!profileImage && "T"}
            </Avatar>
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="row row-cols-1 gap-4">
        <div className="col ">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </div>

        {/* Email */}
        <div className="col ">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
        </div>

        {/* Phone */}
        <div className="col ">
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </div>

        {/* Address */}
        <div className="col ">
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </div>

        {/* Update Profile Button */}
        <div className="text-end mt-3">
          <Button
            variant="contained"
            color="primary"
            // onClick={handleUpdate}
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
