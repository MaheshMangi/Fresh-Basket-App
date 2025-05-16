import React, { useState, useEffect } from "react";
import { getCurrentUser, updateUser, clearCurrentUser } from "./store";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/login");
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    updateUser(formData);
    setUser(formData);
    setEditable(false);
    alert("Profile Updated Successfully!");
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="form-container">
      <h2>User Profile</h2>

      {formData.avatar && (
        <img src={formData.avatar} alt="Avatar" width="100" height="100" />
      )}

      <div className="profile-field">
        <label>Name:</label>
        {editable ? (
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        ) : (
          <p>{formData.name}</p>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        <p>{formData.email}</p>
      </div>

      <div className="profile-field">
        <label>Password:</label>
        {editable ? (
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        ) : (
          <p>••••••••</p>
        )}
      </div>

      <div className="profile-field">
        <label>Gender:</label>
        {editable ? (
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <p>{formData.gender || "Not Specified"}</p>
        )}
      </div>

      <div className="profile-field">
        <label>Address:</label>
        {editable ? (
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        ) : (
          <p>{formData.address || "No Address Provided"}</p>
        )}
      </div>

      <div className="profile-field">
        <label>Phone:</label>
        {editable ? (
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        ) : (
          <p>{formData.phone || "No Phone Provided"}</p>
        )}
      </div>

      <div className="profile-field">
        <label>Age:</label>
        {editable ? (
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        ) : (
          <p>{formData.age || "Not Specified"}</p>
        )}
      </div>

      <div className="profile-field">
        <label>Avatar:</label>
        {editable ? (
          <input type="file" accept="image/*" onChange={handleFileChange} />
        ) : (
          <p>Avatar cannot be changed in view mode</p>
        )}
      </div>

      <div className="button-group">
        {editable ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
