import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function LocationDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setLocation(res.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate('/location');
    }
  }, [error, navigate]);

  if (!location) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Location Detail</h1>
      <p>Location ID: {id}</p>
      <p>Name: {location.name}</p>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Number of Residents: {location.residents.length}</p>
    </div>
  );
}

export default LocationDetail;
