import { TipCalcDisplay } from "./components/display";
import { OptionsMenu } from "./components/options-menu";
import Logo from '../assets/logo.svg'
export function App() {
  return (
    <main className="tip-calculator">
      <h1 className="tip-calculator__header">
        <img src={Logo} alt="Splitter logo" />
      </h1>
      <article className="tip-calculator__container tip-calculator__font">
        <OptionsMenu />
        <TipCalcDisplay />
      </article>
    </main>
  );
}

export default App;
