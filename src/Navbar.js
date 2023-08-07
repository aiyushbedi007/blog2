import React from 'react';

const Navbar = () => {
  return (
      <div className='navbar'>
        <h1 className='title'>The Dojo Blog</h1>
        <div className='btns'>
            <button className='homeButton btn'>Home</button>
            <a href='/create' className='btn' style={{
              marginLeft: '20px',
              backgroundColor: 'slategray',
              color: '#fff',
              borderRadius: '10px',
            }}>New Blog</a>
        </div>
      </div>
  )
}

export default Navbar