import React, { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./types/type";
import InsertItem from "./components/InsertItem";
import ItemList from "./components/ItemList";

function App() {
  const saveItem = localStorage["todos"]
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  });

  return (
    <div>
      <div>
        <div>
          <h1>{`todo List`}</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
