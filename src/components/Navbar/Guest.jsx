import { useDispatch, useSelector } from "react-redux";
import { showGuestOption, show } from "../../redux/slice/editSearchSlice";

const Guest = () => {
  const dispatch = useDispatch();
  const adultCount = useSelector((state) => state.guest.adultCount);
  const guestCount = useSelector((state) => state.guest.guestCount);
  const count = adultCount + guestCount;
  const handleShow = () => {
    dispatch(show());
    dispatch(showGuestOption());
  };
  return (
    <li
      type="text"
      onClick={handleShow}
      className="bg-white text-slate-400 cursor-pointer flex items-center justify-center h-[100%] w-[100%] p-4"
    >
      {count == 0 ? "Add guests" : count}
    </li>
  );
};

export default Guest;
