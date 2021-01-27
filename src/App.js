import './App.css'; //all files need to be capitalized in code and in file build
import Header from './components/Header'
import Challenge from './components/challenges/day01/Challenge'
import Footer from "./components/challenges/day01/Footer"
import Home from "./components/challenges/day01/Home"

function App() { //this is a root component
  //const name = 'Sarah' //JS above return statement can be injected into JSX using { }
  //*parent function*
  return (
    <div className="App">
      {/* <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <h3>CHALLENGE!</h3>
      <p>Create ./components/challenges/day 01 folder</p>
      <p>Create a component with h1 tag of your name, p tag with description of yourself, and an unordered list of two truths and a lie</p> */}
      <Header /> {/* this is how you mount a component */}
      <Challenge /> { /* child functions */ }
      <Home />
      <Footer />
    </div>
  );
}

export default App;
