import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import VisitorsLinks from './components/VisitorsLinks';
import AuthLinks from './components/AuthLinks';
import EmployeeInformation from './components/EmployeeInformation'
import CarInformation from './components/CarInformation'
import ShortEmployeeList from './components/ShortEmployeeList';
import Login from './components/Login';
import Register from './components/Register';
import TruckInformation from './components/TruckInformation';
import TrailInformation from './components/TrailInformation';
import AuthenticatedRoute from './components/AuthenticatedRoute.js';
import AuthentificationService from './components/AuthentificationService';
import CustomNavbar from './components/Navbar';

function App() {
 return (
    <div className="App">
      	<Router>  
			<CustomNavbar/>
			{/* {!isUserLoggedId && <VisitorsLinks/>}
			{isUserLoggedId && <AuthLinks/>} */}
			<Route exact path="/" component={Login} /> 
			<Switch>
				<AuthenticatedRoute exact path="/employees/:name" component={EmployeeInformation} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
          		<AuthenticatedRoute exact path="/cars" component={CarInformation}/>
				<AuthenticatedRoute exact path="/trucks" component={TruckInformation}/>
				<AuthenticatedRoute exact path="/trails" component={TrailInformation}/>
				<AuthenticatedRoute exact path="/calendar" component={TrailInformation}/>
				<AuthenticatedRoute exact path="/shortEmployee" component={ShortEmployeeList}/>
			</Switch> 
		</Router>
    </div>
  );
}

export default App;
