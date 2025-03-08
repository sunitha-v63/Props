import React from 'react'
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import Task5 from './Components/Task5';
import Task6 from './Components/Task6';
import Task7 from './Components/Task7';
import Task8 from './Components/Task8';
import Task9 from './Components/Task9';
import Task10 from './Components/Task10';
import Task11 from './Components/Task11';
import Task12 from './Components/Task12';
import Task13 from './Components/Task13';
import Task14 from './Components/Task14';
import Task15 from './Components/Task15';
import Task16 from './Components/Task16';

function App() {
  const message="functional component that accepts a message";
  const name="viyona"
  const age="04"
  const city="Ooty"
  const userWithoutName = {
    name: "",
  };
  const handleClick = () => {
    alert("hello");
  };
  return (
    <div>
      <Task1/>
      <Task2 message={message}/>
      <Task3 name={name} age={age}/>
      <Task4 name={name} city={city}/>
      <Task5 isStudent={true}/>
      <Task6/>
      <Task7 hobbies={["Learning","Knitting","Crochet","Painting","Playing"]}/>
      <Task8 Object={{name:"yatvin",email:"yatvin@gmail.com",phone:9876567887}}/>
      <Task9 props={userWithoutName}/>
      <Task10 color="blue"/>
      <Task11 event={handleClick}/>
      <Task12 title="Card Title" 
        description="This is a reusable card component with a title and description."/>
    <Task13/>
    <Task14/>
    <Task15/>
    <Task16/>

    </div>
  )
}

export default App