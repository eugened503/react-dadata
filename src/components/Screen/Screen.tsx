import React, { FC } from "react";
import "./Screen.css";

const Screen: FC = () => {
 

  return (
    <section className="screen">
      <div className="screen-container">
      <svg
      className="screen__image"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M246.023 4.82622C217.174 -5.55403 183.654 0.808967 160.538 23.925C137.423 47.0407 131.059 80.5605 141.439 109.409L0 250.849L49.151 300L190.591 158.56C219.44 168.94 252.959 162.577 276.075 139.461C299.191 116.345 305.554 82.8255 295.174 53.9767L245.436 103.715L210.008 89.9912L196.285 54.5642L246.023 4.82622ZM59.045 240.955C64.6857 246.595 64.6857 255.741 59.045 261.381C53.4045 267.022 44.2593 267.022 38.6188 261.381C32.978 255.74 32.978 246.595 38.6188 240.955C44.2593 235.314 53.4045 235.314 59.045 240.955Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="300" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
<h1  className="screen__title">Тестовое задание</h1>
</div>
    </section>
  );
};

export default Screen;
