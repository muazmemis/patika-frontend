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
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch]);

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

      {loading && <Loading />}
      {hasNextPage && !loading && (
        <button style={{ padding: '1rem', fontSize: '1rem' }} onClick={() => dispatch(fetchCharacters(page))}>
          Load More
        </button>
      )}
      {!hasNextPage && <p style={{ padding: '1rem', fontSize: '1.5rem' }}>No more characters to load.</p>}
    </div>
  );
}

export default Home;
