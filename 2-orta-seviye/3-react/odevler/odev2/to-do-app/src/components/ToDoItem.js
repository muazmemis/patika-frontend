import { useState } from "react";
import "./ToDoItem.css";

function ToDoItem({ id, item, setItems, removeItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  function handleCheck() {
    setItems((prevState) =>
      prevState.map((item, i) =>
        i === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleInputBlur() {
    setIsEditing(false);
    setItems((prevState) =>
      prevState.map((item, i) => (i === id ? { ...item, text } : item))
    );
  }

  return (
    <div
      className={
        "itemContainer " + (item.completed ? "checkedItems" : "uncheckedItems")
      }
    >
      <div className="checkbox-wrapper-39">
        <label>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={handleCheck}
          />
          <span className="checkbox"></span>
        </label>
      </div>

      {isEditing ? (
        <input
          id={`listItem${id}`}
          className="listItemText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <input
          id={`listItem${id}`}
          className="listItemText"
          onClick={() => setIsEditing(true)}
          value={item.text}
          onChange={() => console.log("Warning verdigi icin koydum.")}
        />
      )}

      <button className="removeItemButton" onClick={() => removeItem(id)}>
        x
      </button>
    </div>
  );
}

export default ToDoItem;
