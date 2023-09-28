import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function deleteItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item != itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItem = [...items, input.value];
    setItems(newItem);
    form.reset();
  }

  return (
    <>
      <div className="shopping-list">
        <h2>Items to buy</h2>
        <form action="" onSubmit={onSubmit}>
          <input type="text" name="item" placeholder="Add an item" required />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item key={index} item={item} deleteItem={deleteItem} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

function Item({ item, deleteItem }) {
  return (
    <>
      <li>
        {item}
        <button className="delete" onClick={() => deleteItem(item)}>
          Delete
        </button>
      </li>
    </>
  );
}
