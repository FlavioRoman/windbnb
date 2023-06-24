import { useDispatch, useSelector } from "react-redux";
import { showLocationOption, show } from "../../redux/slice/editSearchSlice";

const Location = () => {
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(show());
    dispatch(showLocationOption());
  };
  const location = useSelector((state) => state.editSearch.location);
  return (
    <li
      onClick={handleShow}
      className="bg-white flex items-center justify-center border-r-[1px] rounded-tl-xl rounded-bl-xl cursor-pointer h-[100%] w-[100%]"
    >
      {location}
    </li>
  );
};

export default Location;
