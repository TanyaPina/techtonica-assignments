import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="catflip-grid">
      <section id="coin">
        <div id="heads">
        <img src="https://i.pinimg.com/564x/26/89/12/268912fec7d45b4ba9dfafb1046d7b1f.jpg" 
        alt="black silhoutte of a cat head"/>
        </div>
        <div id="tails">
        <img src="https://i.pinimg.com/564x/eb/06/2f/eb062f73192a0e44871b4085547158c6.jpg" 
        alt="black silhoutte of a cat tail"/>
        </div>

      </section>
      <section class="buttons">
        <p>
          <button id="flip">Flip Coin</button>
        </p>
        <p>
          <button id="reset">Reset</button>
        </p>
      </section>
      <section class="scoreboard">
        <p id="heads-count">
          Heads: 0
        </p>
        <p id="tails-count">
          Tails: 0
        </p>
      </section>
    </section>
  );
}

export default App;
