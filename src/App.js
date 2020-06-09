import React from 'react';
import './App.css';
// import react, {jQuery, Html, Cascading} from './Components/Export'
import Sum, { Subtract, Multiply, Division } from './Components/Calculator';



function App() {


  return (
    <div className="Acss">
      <ol>
        <h3 style={{ color: 'blue' }}>the sum of two number is {Sum(5, 10)}</h3>
        <h3 style={{ color: 'skyblue' }}>the subtraction of two number is {Subtract(58, 34)}</h3>
        <h3 style={{ color: 'navyblue' }}>the Multiplication of two number is {Multiply(14, 10)}</h3>
        <h3 style={{ color: 'darkblue' }}>the Division of two number is {Division(58, 34)}</h3>
      </ol>

      {/* <h1>Here are some list of Study Websites</h1>
       <ol>
         <li>Youtube</li>
         <li>W3School</li>
         <li>GeeksforGeeks</li>
         <li>{react}</li>
         <li>{jQuery}</li>
         <li>{Html()}</li>
         <li>{Cascading()}</li>
       </ol> */}



    </div>
  )
}

export default App

