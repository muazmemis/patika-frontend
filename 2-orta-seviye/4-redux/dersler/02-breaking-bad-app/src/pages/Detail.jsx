import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Detail() {
  const [char, setChar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setChar(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!char) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Detail Page</h1>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          width: '50rem',
          textAlign: 'center',
          backgroundColor: '#0d5b6fff',
          margin: '0 auto',
        }}
      >
        <img src={char.image} alt={char.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: '#fff' }}>{char.name}</h2>
        <p style={{ color: '#fff' }}>Status: {char.status}</p>
        <p style={{ color: '#fff' }}>Species: {char.species}</p>
        <p style={{ color: '#fff' }}>Gender: {char.gender}</p>
      </div>
    </div>
  );
}

export default Detail;
