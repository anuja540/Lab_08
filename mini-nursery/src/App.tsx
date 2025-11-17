import { useState } from "react";
import type { Plant } from "./types";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import PlantCard from "./components/PlantCard";

export default function App({ plants }: { plants: Plant[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedPlant = plants.find((p) => p.id === selectedId) || null;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Mini Nursery 🌱</h2>

      <input
        type="text"
        placeholder="Search plants..."
        className="form-control mb-3"
      />

      <div className="row">
        <div className="col-md-4">
          <PlantList
            plants={plants}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <div className="col-md-8">
          <PlantForm />
          <div className="mt-3">
            <PlantCard plant={selectedPlant} />
          </div>
        </div>
      </div>
    </div>
  );
}

