import { NavLink } from 'react-router';

function Card({ characters }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      {characters.map((character) => (
        <NavLink
          to={`/detail/${character.id}`}
          key={character.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            key={character.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '12rem',
              textAlign: 'center',
              backgroundColor: '#35d5a0ff',
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: '#fff' }}>{character.name}</h2>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Card;
