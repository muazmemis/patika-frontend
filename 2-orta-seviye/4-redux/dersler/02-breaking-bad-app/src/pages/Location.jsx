import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Item from '../components/Item';
import Loading from '../components/Loading';
import {
  fetchLocations,
  locationErrorSelector,
  locationSelector,
  locationStatusSelector,
} from '../redux/locationSlice';

function Location() {
  const dispatch = useDispatch();
  const location = useSelector(locationSelector);
  const status = useSelector(locationStatusSelector);
  const error = useSelector(locationErrorSelector);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchLocations());
  }, [dispatch, status]);

  if (status === 'failed') {
    return <Error message={error} />;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Locations</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {status === 'loading' && <Loading />}
        {status === 'succeeded' && location.map((loc) => <Item key={loc.id} loc={loc} />)}
        {status === 'succeeded' && <p>{location.length} Locations</p>}
      </div>
    </div>
  );
}

export default Location;
