import ToDoItem from "./ToDoItem";

function ToDoList({ items, setItems, removeItem }) {
  return (
    <div className="listContainer">
      {items.map((item, i) => (
        <ToDoItem
          key={i}
          item={item}
          id={i}
          removeItem={() => removeItem(i)}
          setItems={setItems}
        />
      ))}
    </div>
  );
}

export default ToDoList;
