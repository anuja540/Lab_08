import type { Plant } from "../types";

interface Props {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export default function PlantList({ plants, selectedId, onSelect }: Props) {
  return (
    <ul className="list-group">
      {plants.map((p) => (
        <li
          key={p.id}
          className={`list-group-item d-flex justify-content-between align-items-center 
            ${selectedId === p.id ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(p.id)}
        >
          <div>
            <strong>{p.name}</strong>
            <br />
            <small className="text-muted">{p.scientific}</small>
          </div>

          <div>
            <span className={`badge bg-primary me-1`}>{p.difficulty}</span>
            {p.rarity && <span className="badge bg-warning text-dark">{p.rarity}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}
