// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.css';
import SummaryItem from './components/summary-item'
import Memory from '../assets/icon-memory.svg'
import Reaction from '../assets/icon-reaction.svg'
import Verbal from '../assets/icon-verbal.svg'
import Visual from  '../assets/icon-visual.svg'
const items = [
  {
    title: 'Reaction',
    value: 80,
    icon: Reaction,
  },
  {
    title: 'Memory',
    value: 92,
    icon:Memory,
  },
  {
    title: 'Verbal',
    value: 61,
    icon: Verbal,
  },
  {
    title: 'Visual',
    value: 73,
    icon:Visual,
  },

]

export function App() {
  return (
    <main className='summary-container'>
      <section className="result">
        <h2 className='result__header'>Your result</h2>
        <div className="result__circle">
          <span className="result__circle-header">76</span>
          <span className="result__circle-total">of 100</span>
        </div>
        <h3 className="result__headline">Great</h3>
        <p className='result__text'>Your performance exceed 65% of the people conducting the test here!</p>
      </section>
      <section className="summary">
        <h2 className="summary__header">Summary</h2>
        <div className='summary__list'>
          {items.map((summary, idx) => <SummaryItem key={summary.title} {...summary} index={idx} />)}
        </div>
        <button className="summary__continue-btn">Continue</button>
      </section>
    </main>
  );
}

export default App;
