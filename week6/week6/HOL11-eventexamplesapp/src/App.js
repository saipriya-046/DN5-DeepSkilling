import Counter from "./Counter";
import Welcome from "./Welcome";
import ClickMe from "./ClickMe";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  return (
    <div>
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <Welcome />
      <hr />
      <ClickMe />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
