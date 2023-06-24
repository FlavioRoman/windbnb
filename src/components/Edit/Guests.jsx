import { useDispatch, useSelector } from "react-redux";
import {
  showGuestOption,
  hideLocationOption,
} from "../../redux/slice/editSearchSlice";

const Guests = () => {
  const dispatch = useDispatch();
  const adultCount = useSelector((state) => state.guest.adultCount);
  const guestCount = useSelector((state) => state.guest.guestCount);
  const handleShow = () => {
    dispatch(showGuestOption());
    dispatch(hideLocationOption());
  };
  const count = adultCount + guestCount;
  return (
    <div
      id="guest"
      className="flex flex-col mt-2 md:flex-1 md:justify-center md:border-r-[1px] md:h-[100%] md:px-4"
    >
      <span className="text-[0.8rem] font-bold">GUESTS</span>
      <span type="text" className="text-slate-400 mt-2" onClick={handleShow}>
        {count == 0 ? "Add guests" : count}
      </span>
    </div>
  );
};

export default Guests;
