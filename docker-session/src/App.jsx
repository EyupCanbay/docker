import './App.css';
import images from './images.json';
function App() {
  // Select a random image
  const randomImage = images[Math.floor(Math.random() * images.length)].path;
  return (
    <div className="App">
      <h1>Rastgele foto updated v1.0.2</h1>
      <img src={randomImage}/>
    </div>
  );
}

export default App;