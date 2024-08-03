import './App.css';

function App() {
  const value = 99/4*3;
  return (
    <main>
      <label>status <progress max={100} value={value} style={{"--p": `${value}%`}}>{value} %</progress></label>
    </main>
  );
}

export default App;
