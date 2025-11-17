export default function PlantForm() {
  return (
    <div className="card p-3 shadow-sm">
      <h5>Add New Plant</h5>

      <div className="mb-2">
        <label className="form-label">Name</label>
        <input className="form-control" disabled />
      </div>

      <div className="mb-2">
        <label className="form-label">Scientific Name</label>
        <input className="form-control" disabled />
      </div>

      <div className="mb-2">
        <label>Difficulty</label>
        <select className="form-select" disabled>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Light</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Medium</option>
          <option>Bright</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Water</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Moderate</option>
          <option>Frequent</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Description</label>
        <textarea className="form-control" disabled></textarea>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" disabled>Add Plant</button>
        <button className="btn btn-outline-secondary" disabled>Clear</button>
      </div>
    </div>
  );
}
