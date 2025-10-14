import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {(Array.isArray(characters) ? characters : []).map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
