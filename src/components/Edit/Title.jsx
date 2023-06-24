import { useDispatch } from "react-redux";
import { IconClose } from "../../icons/Icons";
import {
  hide,
  hideGuestOption,
  hideLocationOption,
} from "../../redux/slice/editSearchSlice";

const Title = () => {
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(hide());
    dispatch(hideGuestOption());
    dispatch(hideLocationOption());
  };
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-bold">Edit your search</h3>
      <div onClick={handleShow} className="cursor-pointer">
        <IconClose />
      </div>
    </div>
  );
};

export default Title;
