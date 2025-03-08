import React from 'react'

function Task16({ text, color = "purple" }) {
text ="Create a functional component that accepts text and color props, then displays the text in the given color."
  return (
    <div>
        <h6>Mini Project 3: Colorful Text</h6>
        <h3 style={{color:'yellow'}}>Colorful Text</h3>
        <p style={{ color: color }}>{text}</p>
        </div>

  )
}

export default Task16