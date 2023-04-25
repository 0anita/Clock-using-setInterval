import React, { useState } from 'react'

const App = () => {

const [date, setDate] = useState(new Date());
setInterval(() => {
  setDate(new Date());
}, 1000);


// Making a clock using synchronous function
  return (
    <div>
      <h1>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1>
    </div>
  )
}

export default App

