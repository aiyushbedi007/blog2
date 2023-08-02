import React from 'react';

const Content = () => {
  // const body = ['Title1', 'title2'];
  // const author1 = 'Aiyush Bedi'
  const data = [
    {
    title: 'Blog post 1',
    author: 'Aiyush Bedi'
  },
  {
    title: 'Blog post 2',
    author: 'Romeo'
  }]
  return (
      <div className='content'>
        {data.map(item=>{
          return(
            <div className='data'>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
            </div>
          )
        })}
      </div>
  )
}

export default Content