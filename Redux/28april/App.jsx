import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const cnt = useSelector((state) => state.mycounter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to App compo</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{cnt}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};
export default App;
