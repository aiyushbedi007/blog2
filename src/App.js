import './App.css';
import Content from './Content';
import Navbar from './Navbar';

function App() {
  const data2 = [
    {
    title: 'Blog post 1',
    author: 'aiyush'
  },
  {
    title: 'Blog post 2',
    author: 'romeo'
  }]
  const age = 28;
  return ( 
    <div className="App">
      <div className='inside--app'>
        <Navbar />
        <hr />
        <Content data={data2} age={age}/>
      </div>
    </div>
  );
}

export default App;
