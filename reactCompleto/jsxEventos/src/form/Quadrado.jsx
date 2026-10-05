import React from 'react'

const Quadrado = () => {

  const HandleClick = (event) => {
    console.log(event)
  }

  return (

    <div onMouseEnter={HandleClick} style= {{width: 100, height: 100, backgroundColor: 'black'}}></div>
  )
}

export default Quadrado