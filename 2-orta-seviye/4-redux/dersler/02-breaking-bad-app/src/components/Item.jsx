function Item({ loc }) {
  return (
    <div
      key={loc.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        border: '1px solid gray',
        padding: '1rem',
        width: '15rem',
        backgroundColor: '#2c7a60ff',
      }}
    >
      <h2>{loc.name}</h2>
      <p>Type: {loc.type}</p>
      <p>Dimension: {loc.dimension}</p>
      <p>Number of Residents: {loc.residents.length}</p>
    </div>
  );
}

export default Item;
