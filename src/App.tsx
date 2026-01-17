import pompompurinGif from './assets/pompompurin.gif'
import './App.css'

function App() {
  return (
    <div>
      <img src={pompompurinGif} className="pompompurin" alt="Pompompurin" />
      <h1>blonk: a screen time app</h1>
      <p>coming soon to a iOS device near you</p>
      <p>for more info, email us at <a href="mailto:hello@blonk.app">hello@blonk.app</a></p>
    </div>
  )
}

export default App
