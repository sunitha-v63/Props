import React from 'react'

function Task9(props) {
  return (
    <div>
        <h6>Task9</h6>
        <h3>Conditional Rendering with Props</h3>
        <p>
        {props.name ? `Welcome, ${props.name}` : "Welcome, Guest"}
      </p>
    </div>
  )
}

export default Task9