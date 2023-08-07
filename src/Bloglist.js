import React from 'react'
const Bloglist = ({data, className}) => {
  return (
    <div>
         {data.map(item=>{
          return(
            <div className={className}>
              {Object.values(item).map(header=>{
                return(
                    <p>{header}</p>
                )
              })}
              {/* <p>{item.author}</p> */}
            </div>
          )
        })}
    </div>
  )
}

export default Bloglist