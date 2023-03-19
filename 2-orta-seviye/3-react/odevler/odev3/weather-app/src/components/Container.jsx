import { WeatherProvider } from "../context/Weather";
import City from "./City";
import Table from "./Table";

function Container() {
  return (
    <div>
      <WeatherProvider>
        <City />
        <Table />
      </WeatherProvider>
    </div>
  );
}

export default Container;
