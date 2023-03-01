import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <navbar>
        <img src={logo} className = 'navlogo' alt ='navbarlogo'/>
        <h3>React facts </h3>
        <h4>React Course - Project 1</h4>
      </navbar>
      <main>
        <h2>
          Fun Facts about React
        </h2>
        <ul>
          <li>
            Was first released in 2013
          </li>
          <li>Was originally created by Jordan</li>
          <li>Has well over 100K stars of Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of entreprise apps, including moblie apps</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
