import React from "react";
import PropTypes from "prop-types"
import "../styles/avatar.css"
import avatar from "../assets/avatar.png"

const Avatar = ({page}) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
        <span className={spanClass}></span>
        <img src={avatar} className={avatarClass} alt="avatar"/>
    </>
  )
};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;
