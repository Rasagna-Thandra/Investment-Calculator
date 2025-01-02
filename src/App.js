import './App.css';
import Header from './components/Header';
import Userinput from './components/Userinput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});
const isInputValid=userInput.duration>=1;
function handleChange(inputIdentifier,newValue){
    setUserInput(
        prevInput => {
            return{
                ...prevInput,
                [inputIdentifier]: +newValue
            };
        }
    );
}
  return (
    <>
      <Header />
      <Userinput onChange={handleChange} userInput={userInput}/>
      {!isInputValid && <p className="center">Please enter a duration greater than Zero.</p>}
      {isInputValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
