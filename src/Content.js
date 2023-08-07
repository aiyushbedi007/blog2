import React, { useState } from 'react';
import Bloglist from './Bloglist';

const Content = (props) => {
  console.log(props);
  const {data, age} = props;
  // const body = ['Title1', 'title2'];
  // const author1 = 'Aiyush Bedi'
  // let name = 'Aiyush Bedi';
  const [name, setName] = useState('Aiyush');
  const handleClick = () => {
    console.log('button clicked')
    setName('Romeo')
  }
  const data2 = data.filter(data => data.author === 'aiyush');
  const data3 = data.filter(data => data.author === 'romeo');
  return (
      <div className='content'>
        <Bloglist data={data} />
        {/* <Bloglist className='red' data={data2} /> */}
        {/* <Bloglist className='blue' data={data3} /> */}
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
  )
}

export default Content