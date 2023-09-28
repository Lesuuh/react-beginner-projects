import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function addItem(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItem = [...items, input.value];
    setItems(newItem);
    form.reset();
  }

  function deleteItem(removeItem) {
    const newItems = items.filter((item) => {
      item != removeItem;
    });

    setItems(newItems);
  }

  return (
    <>
      <div>
        <div className="shopping-list">
          <h2>Items to buy</h2>
          <form action="" onSubmit={addItem}>
            <input
              type="text"
              name="item"
              placeholder="Add an item"
              required
            />
            <button>Add</button>
          </form>
          <ul>
            {items.map((item, index) => (
              <Item key={index} item={item} deleteItem={deleteItem} />
            ))}
          </ul>
        </div>
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
        <button className="delete" onClick={deleteItem}>
          Delete
        </button>
      </li>
    </>
  );
}
