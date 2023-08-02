import './App.css';
import Content from './Content';
import Navbar from './Navbar';

function App() {
  return ( 
    <div className="App">
      <div className='inside--app'>
        <Navbar />
        <hr />
        <Content />
      </div>
    </div>
  );
}

export default App;
