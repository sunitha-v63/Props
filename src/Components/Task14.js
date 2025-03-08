import React from 'react'

function Task14({ name = "viyona", age = 20, city = "Comibatore" }) {
  return (
    <div>
        <h6>Mini project 1</h6>
        <h3>Profile Card</h3>
        <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
        </div>
        
  )
}

export default Task14