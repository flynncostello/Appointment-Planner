import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ content }) => {
  return (
    <div>
      {content.map((tile, index) => {
        const {name, ...info} = tile;
        return <Tile key={index} name={name} info={info} />
      })}
    </div>
  );
};
