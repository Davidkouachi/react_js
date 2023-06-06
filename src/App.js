import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter'; 

function App() {
  return (
    <div className="App">
        <Nav fill pills>
      <NavItem>
        <NavLink
          active
          href="http://localhost:3000/acceuil"
        >
          Acceuil
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="http://localhost:3000/formulaire">
          Formulaire
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="http://localhost:3000/liste">
          Liste
        </NavLink>
      </NavItem>
    </Nav>
        <AppRouter />
    </div>
  );
}

export default App;
