// 
import './App.css';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import EmployeeInformation from './components/EmployeeInformation'
import CarInformation from './components/CarInformation'

function App() {
  return (
    <div className="App">
      <Router>    
				<NewNavbar />
        
				<Route exact path="/" component={Navbar} /> 
			   <Switch>
					<Route exact path="/employees" component={EmployeeInformation} />
					<Route exact path="/login" component={Navbar} />
					<Route exact path="/register" component={Navbar} />
          <Route exact path="/cars" component={CarInformation}/>
				</Switch> 
		  </Router>
    </div>
  );
}

export default App;
