import React from "react";

function Profilephoto(props) {
  return (
    <>
      <div className="m-2">
        <img
          className="img"
          style={{ borderRadius: props.radius }}
          src={props.src}
          alt="profile"
        />
      </div>
      <div className="name">{props.name}</div>
      <div className="about">{props.about}</div>
    </>
  );
}

export default Profilephoto;
