import type { Plant } from "../types";

export default function PlantCard({ plant }: { plant: Plant | null }) {
  if (!plant) return <p>Select a plant...</p>;

  const lightIcons = {
    Low: "🔅",
    Medium: "🔆",
    Bright: "💡"
  };

  const waterIcons = {
    Low: "💧",
    Moderate: "💧💧",
    Frequent: "💧💧💧"
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>
        {plant.name}
        <br />
        <small className="text-muted">{plant.scientific}</small>
      </h4>

      <p>{plant.description}</p>

      <div className="mb-2">
        <span className="badge bg-primary me-2">{plant.difficulty}</span>
        {plant.rarity && <span className="badge bg-warning text-dark">{plant.rarity}</span>}
      </div>

      <p>Light: {lightIcons[plant.light]}</p>
      <p>Water: {waterIcons[plant.water]}</p>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary btn-sm" disabled>
          View
        </button>
        <button className="btn btn-success btn-sm" disabled>
          Buy
        </button>
      </div>
    </div>
  );
}
