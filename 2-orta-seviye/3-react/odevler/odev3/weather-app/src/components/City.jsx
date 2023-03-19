import { useWeather } from "../context/Weather";
import cities from "../data/cities.json";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

function City() {
  const { setCity } = useWeather();
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, maxWidth: "150px" }} style={{ margin: "25px" }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Şehir
          </InputLabel>
          <NativeSelect onChange={handleChange} defaultValue={"İstanbul"}>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
}

export default City;
