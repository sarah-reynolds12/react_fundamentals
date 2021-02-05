import './App.css'; //all files need to be capitalized in code and in file build
//import Header from './components/Header'
//import Challenge from './components/challenges/day01/Challenge'
//import Footer from "./components/challenges/day01/Footer"
//import Home from "./components/challenges/day01/Home"
//import MortyParent from "./components/Morty/MortyParent"
import ChuckJoke from "./components/challenges/day04/ChuckJoke"

function App() { //this is a root component
  //const name = 'Sarah' //JS above return statement can be injected into JSX using { }
  //*parent function*
  return (
    <div>
      <ChuckJoke />
    </div>
  );
}

export default App;
