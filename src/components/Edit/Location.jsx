import { useDispatch, useSelector } from "react-redux";
import {
  hideGuestOption,
  showLocationOption,
} from "../../redux/slice/editSearchSlice";

const Location = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.editSearch.location);
  const handleShow = () => {
    dispatch(hideGuestOption());
    dispatch(showLocationOption());
  };
  return (
    <div
      onClick={handleShow}
      className="flex flex-col md:flex-1 md:justify-center md:border-r-[1px] md:h-[100%] md:px-4"
    >
      <span className="text-[0.8rem] font-bold">LOCATION</span>
      <p className="mt-2">{location}</p>
    </div>
  );
};

export default Location;
