import React from "react";

const CustomCursor = ({ position, isZoom, isDisplay }) => {
    return (
      <div className={"custom-cursor" + (isZoom ? " zoomed" : "") + (isDisplay ? " isdisplay" : "")} style={{ left: position.x, top: position.y }}>
        <div className="cursor-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10L4 2V18L18 10Z" stroke="white"/>
            </svg>
        </div>
        <div className="cursor-text">Read more</div>
      </div>
    );
  };

export default CustomCursor;