import { IconSearch } from "../../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { filterStays } from "../../redux/slice/staysSlice";
import { hide } from "../../redux/slice/editSearchSlice";

const Button = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.editSearch.city);
  const handleClick = () => {
    dispatch(hide());
    dispatch(filterStays(city));
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute left-0 right-0 bottom-0 bg-buttonColor flex items-center justify-center rounded-[20px] max-w-[130px] h-[50px] mx-auto my-6 md:hidden"
    >
      <IconSearch color={"#fff"} />
      <p className="text-white font-medium">Search</p>
    </button>
  );
};

export default Button;
