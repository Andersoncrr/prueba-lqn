import React from "react";
import "./StarWarsCard.css";
import { Link } from "react-router-dom";
import { people } from "./definitions";

export const StarWarsCard = ({ data }: any) => {
  const typeColor: any = {
    yellow: "#26de81",
    unknown: "#ffeaa7",
    pink: "#fed330",
    brownn: "#FF0069",
    orange: "#30336b",
    blue: "#f0932b",
    blue_gray: "#81ecec",
    gold: "#00b894",
    white: "#a55eea",
    hazel: "#74b9ff",
    red: "#95afc0",
    black: "#2d3436",
    brown: "#0190FF",
  };

  const color =
    data.eyeColor === "blue-gray"
      ? "#EFB549"
      : data.eyeColor === "green, yellow"
      ? "#008f39"
      : data.eyeColor === "red, blue"
      ? "#8B0000"
      : typeColor[data.eyeColor];

  return (
    <Link to={`./starWards/${data.id}`} className="container-card">
      <div className="card" style={{ background: color }}>
        <div className="contentBx">
          <h2>{data.name}</h2>
          <div className="size">
            <h3>ID : {data.id}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
