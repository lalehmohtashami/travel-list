import { useState } from "react";
import AddForm from "./AddForm";
import Header from "./Header";
import List from "./List";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function onClearList() {
    if (window.confirm("do you want clear the list?")) {
      setItems([]);
    } else return;
  }
  return (
    <div className="App">
      <Header />
      <AddForm handleAddItem={onAddItem} />
      <List
        items={items}
        handleToggleItem={onToggleItem}
        handleDeleteItem={onDeleteItem}
        handleClearList={onClearList}
      />
      <Stats items={items} />
    </div>
  );
}
