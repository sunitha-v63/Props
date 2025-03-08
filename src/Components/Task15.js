import React from 'react'

function Task15() {
    const items = ['Apple', 'Banana', 
        'Orange', 'Papaya', 'Guava', 
        'Grapes', 'Date'];
        const itemList = items.map((item, index) => (
            <li key={index}>{item}</li>
          ));
  return (
    <div>
        <h6>Mini Project 2</h6>
        <h3>Task List </h3>
        <div>
      <h2>Fruit Name</h2>
      <ul>{itemList}</ul>
    </div>
        
    </div>
  )
}

export default Task15