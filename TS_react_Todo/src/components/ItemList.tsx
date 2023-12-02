import React from "react";
import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const onDelete = (data: Item) => {
    setItems(
      items.filter((item: Item) => {
        return item.itemId !== data.itemId;
      })
    );
  };

  const onComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li key={data.itemId}>
            <p>{data.itemName}</p>
            <div>
              <button onClick={() => onDelete(data)}>{`❌`}</button>
              <button onClick={() => onComplete(data)}>{`✅`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
