import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchCharacters } from '../redux/charactersSlice';

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Home</h1>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', listStyleType: 'none' }}>
        {characters.map((character) => (
          <div key={character.id}>
            <li>
              <img style={{ width: '15rem', height: '15rem' }} src={character.image} alt={character.name} />
            </li>
            <li>{character.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
