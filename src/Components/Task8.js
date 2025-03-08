import React from 'react'

function Task8(props) {
  return (
    <div>
        <h6>Task8</h6>
        <h3>Object Props:</h3>
        <p>Name: {props.Object.name}</p>
        <p>Email: {props.Object.email}</p>
        <p>Phone: {props.Object.phone}</p>
    </div>
  )
}

export default Task8