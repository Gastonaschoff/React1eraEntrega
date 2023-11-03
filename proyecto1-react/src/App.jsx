
import './App.css'
import NavBar.jsx from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= "App">
      <NavBar /> 
    </div>
  )
}

export default App
