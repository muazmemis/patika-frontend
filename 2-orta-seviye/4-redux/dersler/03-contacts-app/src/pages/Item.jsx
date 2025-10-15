function Item({ item }) {
  return (
    <li>
      <span>{item.name}</span> - <span>{item.phoneNumber}</span>
    </li>
  );
}

export default Item;
