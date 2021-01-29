import './App.css'; //all files need to be capitalized in code and in file build
//import NameProp from "./components/challenges/day02/NameProp";
import Contact from "./components/challenges/day02/Contact"
import State from "./components/challenges/day02/State"

function App() { //this is a root component
  //const name = 'Sarah' //JS above return statement can be injected into JSX using { }
  //*parent function*
  let props ={
    name: "Sarah",
    age: "35",
    school: "Purdue",
    graduationYear: "2007"} //object like one from server that is passed into Contact component

  return (
    <div className="App">
      {/*<NameProp name = "Sarah"
      <NameProp name = "Erin" />*/}
      <Contact {...props}/>
      <p>===========================</p>
      <State />
      

      
    </div>
  );
}

export default App;
