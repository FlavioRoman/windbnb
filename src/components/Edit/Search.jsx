import Title from "./Title";
import Guests from "./Guests";
import Button from "./Button";
import Location from "./Location";
import ButtonLine from "./ButtonLine";
import { useSelector } from "react-redux";
import OptionGuest from "./options/OptionGuest";
import OptionLocation from "./options/OptionsLocation";

const Search = () => {
  const state = useSelector((state) => state.editSearch.show);
  const stateGuest = useSelector((state) => {
    return state.editSearch.showGuestOption;
  });
  const stateLocation = useSelector((state) => {
    return state.editSearch.showLocationOption;
  });
  const show = state
    ? "bg-white fixed top-0 left-0 right-0 h-[80%] drop-shadow-md p-6"
    : "bg-white fixed top-0 left-0 right-0 h-[0%] overflow-hidden drop-shadow-md";
  return (
    <div className={show}>
      <Title />
      <div className="bg-white flex flex-col drop-shadow-md rounded-[30px] px-8 py-4 mt-4 md:flex-row md:items-center md:h-auto md:p-0">
        <Location />
        <Guests />
        <ButtonLine />
      </div>
      <div>
        {stateLocation && <OptionLocation />}
        {stateGuest && <OptionGuest />}
      </div>
      <Button />
    </div>
  );
};

export default Search;
