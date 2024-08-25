import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <p className="font-bold">Redux</p>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
