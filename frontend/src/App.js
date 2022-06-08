import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import VisitorsLinks from './components/VisitorsLinks';
import AuthLinks from './components/AuthLinks';
import EmployeeInformation from './components/EmployeeInformation'
import CarInformation from './components/CarInformation'
import ShortEmployeeList from './components/ShortEmployeeList';
import Login from './components/Login';
import RegisterCompany from './components/RegisterCompany';
import RegisterUser from './components/RegisterUser';
import TruckInformation from './components/TruckInformation';
import TrailInformation from './components/TrailInformation';
import AuthenticatedRoute from './components/AuthenticatedRoute.js';
import AuthentificationService from './components/AuthentificationService';
import CustomNavbar from './components/Navbar';
import AddTrail from './components/AddTrail';
import AddCar from './components/AddCar';
import AddTruck from './components/AddTruck';
import AddEmployee from './components/AddEmployee';
import CalendarClass from './components/CalendarClass.js';

function App() {
 return (
    <div className="App">
      	<Router>  
			<CustomNavbar/>
			<Route exact path="/" component={Login} /> 
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/registerCompany" component={RegisterCompany} />
				<Route exact path="/registerUser" component={RegisterUser} />
				<AuthenticatedRoute exact path="/employees/:id" component={AddEmployee} />
				<AuthenticatedRoute exact path="/employees" component={EmployeeInformation} />
				<AuthenticatedRoute exact path="/cars/:id" component={AddCar}/>
          		<AuthenticatedRoute exact path="/cars" component={CarInformation}/>
				<AuthenticatedRoute exact path="/trucks/:id" component={AddTruck}/>
				<AuthenticatedRoute exact path="/trucks" component={TruckInformation}/>
				<AuthenticatedRoute exact path="/trails/:id" component={AddTrail}/>
				<AuthenticatedRoute exact path="/trails" component={TrailInformation}/>
				<AuthenticatedRoute exact path="/calendar" component={CalendarClass}/>
				<AuthenticatedRoute exact path="/shortEmployee" component={ShortEmployeeList}/>
			</Switch> 
		</Router>
    </div>
  );
}

export default App;
