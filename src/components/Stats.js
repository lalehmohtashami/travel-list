export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>you have not any items yet!</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPresent = Math.round((numPacked / numItems) * 100);

  return (
    <div className="stats">
      <em>
        you have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({packedPresent}%)
      </em>
    </div>
  );
}
