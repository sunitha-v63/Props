import React from 'react'

function Task10({color}) {
    const text = { color: color };
  return (
    <div><h6>Task10</h6>
    <h3>Inline Styling with Props:</h3>
    <p style={text}>Pass a color prop and apply it to style the text 
    dynamically. </p>
    </div>
  )
}

export default Task10