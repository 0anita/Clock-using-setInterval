import React, { useState } from 'react'

const App = () => {

const [val, setVal] = useState(null);

setTimeout(() =>{
  setVal({
    title: "Anita"
  });
}, 5000)


// Making a clock using synchronous function
  return (
    <div>
      <h1>{val?.title}</h1>
      {val && <h1>{val.title}</h1>}
    </div>
  )
}

export default App

