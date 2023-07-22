import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import QuoteBox from "./components/QuoteBox";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QuoteBox />
      </Provider>
    </div>
  );
}
