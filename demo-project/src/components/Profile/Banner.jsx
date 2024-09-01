import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./Banner.css";
import defaultBanner from "../../assets/8.jpg";
import defaultAvatar from "../../assets/admin.png";

const Banner = ({
  avatarPreview,
  coverPreview,
  updateAvatarChange,
  updateCoverChange,
}) => {
  return (
    <div className="banner_img">
      <img
        src={coverPreview || defaultBanner}
        alt="Cover"
        style={{ position: "relative" }}
      />
      <label htmlFor="cover-upload" className="plus-icon">
        <FaPlusCircle
          size={24}
          style={{
            position: "absolute",
            right: "0",
            bottom: "110px",
            color: "#A02334",
            cursor: "pointer",
          }}
        />
        <input
          type="file"
          id="cover-upload"
          accept="image/*"
          onChange={updateCoverChange}
          style={{ display: "none" }}
        />
      </label>
      <div className="banner_profile">
        <img
          src={avatarPreview || defaultAvatar}
          alt="Avatar"
          style={{ position: "relative" }}
        />
        <label htmlFor="avatar-upload" className="plus-icon">
          <FaPlusCircle
            size={24}
            style={{
              position: "absolute",
              right: "0",
              bottom: "40px",
              cursor: "pointer",
              color: "#A02334",
            }}
          />
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={updateAvatarChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
    </div>
  );
};

export default Banner;
