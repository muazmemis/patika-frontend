import { NavLink } from 'react-router';

function Card({ characters }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            width: '12rem',
            textAlign: 'center',
            backgroundColor: '#35d5a0ff',
          }}
        >
          <NavLink to={`/detail/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: '#fff' }}>{character.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Card;
