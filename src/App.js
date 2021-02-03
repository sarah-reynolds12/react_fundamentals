import './App.css'; //all files need to be capitalized in code and in file build
import Auth from'./components/challenges/day03/Auth/Auth'


function App() { //this is a root component
  //const name = 'Sarah' //JS above return statement can be injected into JSX using { }
  //*parent function*
  return (
    <div>
    <Auth />
    </div>
  );
}

export default App;
