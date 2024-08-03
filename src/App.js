import './App.css';

function App() {
  return (
    <main>
      <label>status <progress max={100} value={70} style={{"--p": "70%"}}>70%</progress></label>
    </main>
  );
}

export default App;
