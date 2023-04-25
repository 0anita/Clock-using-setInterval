import React, { useEffect, useState } from 'react'

const App = () => {

const [val, setVal] = useState(null);

const h = setTimeout(() =>{
  setVal({
    title: "Anita"
  });
}, 5000)
useEffect( () => {
 console.log('run me');
 if (val!== null){
  clearTimeout(h);
 }

}, [val]);

// Making a clock using synchronous function
  return (
    <div>
      <h1>{val?.title}</h1>
      {val && <h1>{val.title}</h1>}
    </div>
  )
}

export default App

