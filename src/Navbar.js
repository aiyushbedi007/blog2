import React from 'react';

const Navbar = () => {
  return (
      <div className='navbar'>
        <h1 className='title'>The Dojo Blog</h1>
        <div className='btns'>
            <button className='homeButton btn'>Home</button>
            <button className='blogButton btn'>New Blog</button>
        </div>
      </div>
  )
}

export default Navbar