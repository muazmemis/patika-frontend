import { useWeather } from "../context/Weather";
import CardItem from "./CardItem";

function Table() {
  const { weather } = useWeather();

  return (
    <div style={{ position: "relative", display: "flex" }} className="mobile">
      {weather.map((item) => {
        return <CardItem key={item.date_epoch} item={item} />;
      })}
    </div>
  );
}

export default Table;
