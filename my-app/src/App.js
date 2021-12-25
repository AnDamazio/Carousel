import Carrossel from './components/Carrossel';
import './App.css';
import logo from './logo.svg';
import buraco from './buraco.jpg';
import ReactDOM from 'react-dom';

let images = [logo, buraco]

function App() {
  
  
    ReactDOM.render(
      <Carrossel images={images}/>,
      document.getElementById('root')
    )

    
}

export default App;
