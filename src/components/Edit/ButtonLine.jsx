import { IconSearch } from "../../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../redux/slice/editSearchSlice";
import { filterStays } from "../../redux/slice/staysSlice";

const ButtonLine = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.editSearch.city);
  const handleClick = () => {
    dispatch(hide());
    dispatch(filterStays(city));
  };
  return (
    <div className="hidden md:visible md:flex md:flex-1 md:justify-center md:h-[100%] md:px-4">
      <button
        type="button"
        onClick={handleClick}
        className="bg-buttonColor flex items-center justify-center rounded-[20px] max-w-[150px] w-[150px] my-6 mx-auto "
      >
        <IconSearch color={"#fff"} />
        <p className="text-white font-medium">Search</p>
      </button>
    </div>
  );
};

export default ButtonLine;
