/** @format */

import Counter from "./Counter";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>The Compound Component Pattern</h1>
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>

      <Counter>
        <Counter.Decrease icon="⫷" />
        <Counter.Count />
        <Counter.Increase icon="⫸" />
      </Counter>
    </div>
  );
}
