import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import RestauranstList from './components/RestauranstList';
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import Login from './components/Login'
import Logout from './components/Logout'
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlusCircle, faSearch, faInfoCircle, faUserEdit, faUser } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"><b>Ojas Resto</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/list"}><FontAwesomeIcon icon={faList}></FontAwesomeIcon> List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/create"}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/search"}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/details"}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Details</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/update"}><FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon> Update</Link></Nav.Link>
            {
              localStorage.getItem('login') ?
                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout </Link></Nav.Link>

                :
                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login </Link></Nav.Link>
            }
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/list">
            <RestauranstList />
          </Route>
          <Route path="/create">
            <RestaurantCreate />
          </Route>
          <Route path="/search">
            <RestaurantSearch />
          </Route>

          <Route path="/details/:id"
            render={props => (
              <RestaurantDetail {...props} />
            )}
          >
          </Route>
          <Route path="/update/:id"
            render={props => (
              <RestaurantUpdate {...props} />
            )}
          >
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login"
            render={props => (
              <Login {...props} />
            )}
          >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
