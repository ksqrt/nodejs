import "./App.css";
import Hello from "./components/Hello";
import Color from "./components/Color";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";

export default function App() {
  return (
    <div className="App">
      <div>
        <Color name="songuk" color="blue"></Color>
        <Counter></Counter>
        <InputSample></InputSample>
        <hr></hr>
        <Hello></Hello>
      </div>
    </div>
  );
}
