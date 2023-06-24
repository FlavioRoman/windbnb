import { useDispatch } from "react-redux";
import { locations } from "../../../utils/stays";
import { IconLocation } from "../../../icons/Icons";
import { city, location } from "../../../redux/slice/editSearchSlice";

const OptionLocation = () => {
  const dispatch = useDispatch();
  const handleSelect = (event) => {
    dispatch(location(event.target.id));
    dispatch(city(event.target.dataset.city));
  };
  return (
    <ul className="py-2">
      {locations.map((item, index) => {
        const { city, country } = item;
        return (
          <li
            key={index}
            data-city={city}
            onClick={handleSelect}
            data-country={country}
            id={`${city}, ${country}`}
            className="flex items-center cursor-pointer rounded-md gap-x-1 py-2 hover:bg-slate-100"
          >
            <IconLocation />
            {city}, {country}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionLocation;
