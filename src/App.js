import './App.css';
import { Widget } from './components/progress-widget';

function App() {
  return (
    <main>
      <Widget value={70} color={["#31c6f7", "#31f74b"]} size={"350px"}>
        <div>status</div>
      </Widget>
    </main>
  );
}

export default App;
