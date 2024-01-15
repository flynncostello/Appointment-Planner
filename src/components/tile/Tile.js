import React from "react";

export const Tile = ({ name, info }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {name}
      </p>
      {Object.values(info).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
