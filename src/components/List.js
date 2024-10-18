import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  handleToggleItem,
  handleDeleteItem,
  handleClearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description") {
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sort === "packed") {
    sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={handleClearList}>clear list</button>
      </div>
    </div>
  );
}
