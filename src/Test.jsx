import React from 'react'
import {useSelector} from 'react-redux'
const Test = () => {
  const {number} = useSelector(state => state.test)
console.log(number);
  return (
    <div>
      <button>+</button>
      <h1>{number}</h1>
      <button>-</button>


    </div>
  )
}

export default Test