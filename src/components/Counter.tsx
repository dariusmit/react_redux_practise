import { useDispatch, useSelector } from "react-redux";
import { increaseSum } from "../store/actions/increaseSum";
import { decreaseSum } from "../store/actions/decreaseSum";

function Counter() {
  const initialSum = useSelector((state) => state.initialSum.sum);
  const dispatch = useDispatch();

  return (
    <>
      <p>Initial sum:</p>
      <br />
      <p className="text-red-400">{initialSum}</p>
      <br />
      <button className="bg-slate-400" onClick={() => dispatch(increaseSum())}>
        Increase sum
      </button>
      <br />
      <button className="bg-slate-400" onClick={() => dispatch(decreaseSum())}>
        Decrease sum
      </button>
    </>
  );
}

export default Counter;
