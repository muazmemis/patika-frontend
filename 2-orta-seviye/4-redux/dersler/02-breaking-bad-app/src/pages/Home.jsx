import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchCharacters } from '../redux/charactersSlice';

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchCharacters());
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Home</h1>

      <Card characters={characters} />

      {status === 'loading' && <Loading />}
      {hasNextPage && status === 'succeeded' && (
        <button
          style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}
          onClick={() => dispatch(fetchCharacters(page))}
        >
          Load More
        </button>
      )}
      {!hasNextPage && <p style={{ padding: '1rem', fontSize: '1.5rem' }}>No more characters to load.</p>}
    </div>
  );
}

export default Home;
