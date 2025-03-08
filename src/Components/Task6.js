import React from 'react'

function Task6({ name = "Guest" }) {
  return (
    <div>
        <h6>Task6</h6>
        <h3>Default Props:</h3>
        <p>{name}</p>
    </div>
  )
}

export default Task6