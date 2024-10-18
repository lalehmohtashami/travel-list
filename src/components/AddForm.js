import { useState } from "react";

export default function AddForm({ handleAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleAdd(e) {
    e.preventDefault();

    const newItem = { quantity, description, id: Date.now(), packed: false };
    handleAddItem(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <div className="add-form" onSubmit={handleAdd}>
      <div>What do you need for your 😍 trip?</div>
      <form>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option key={num} value={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}
