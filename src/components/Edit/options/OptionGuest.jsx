import { useDispatch, useSelector } from "react-redux";
import {
  adultDecrement,
  adultIncrement,
  guestDecrement,
  guestIncrement,
} from "../../../redux/slice/guestSlice";

const OptionGuest = () => {
  const dispatch = useDispatch();
  const adultCount = useSelector((state) => {
    return state.guest.adultCount;
  });
  const guestCount = useSelector((state) => {
    return state.guest.guestCount;
  });
  return (
    <div className="max-w-[130px] py-2">
      <div>
        <h3 className="font-bold">Adults</h3>
        <p className="text-slate-400">Ages 13 or above</p>
        <ul className="flex items-center justify-between mt-2">
          <button
            onClick={() => dispatch(adultDecrement())}
            className="border-2 border-slate-300 rounded-md flex items-center justify-center text-[1.5rem] px-[12px]"
          >
            -
          </button>
          <span>{adultCount}</span>
          <button
            onClick={() => dispatch(adultIncrement())}
            className="border-2 border-slate-300 rounded-md flex items-center justify-center text-[1.5rem] px-[10px]"
          >
            +
          </button>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mt-2">Children</h3>
        <p className="text-slate-400">Ages 2-12</p>
        <ul className="flex items-center justify-between mt-2">
          <button
            onClick={() => dispatch(guestDecrement())}
            className="border-2 border-slate-300 rounded-md flex items-center justify-center text-[1.5rem] px-[12px]"
          >
            -
          </button>
          <span>{guestCount}</span>
          <button
            onClick={() => dispatch(guestIncrement())}
            className="border-2 border-slate-300 rounded-md flex items-center justify-center text-[1.5rem] px-[10px]"
          >
            +
          </button>
        </ul>
      </div>
    </div>
  );
};

export default OptionGuest;
