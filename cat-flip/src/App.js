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

      </section>
        <img src={logo} className="App-logo" alt="logo" />
    </section>
  );
}

export default App;
