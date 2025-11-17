import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Plant } from "./types";

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "A hardy plant that thrives on neglect."
  },
  {
    id: 2,
    name: "Monstera",
    scientific: "Monstera deliciosa",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "A beautiful tropical plant with split leaves."
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    scientific: "Ficus lyrata",
    difficulty: "Hard",
    light: "Bright",
    water: "Frequent",
    rarity: "Rare",
    description: "A stylish but demanding indoor plant."
  }
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App plants={plants} />
);
