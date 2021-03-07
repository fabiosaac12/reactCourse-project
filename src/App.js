import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Favorites from './components/favorites/Favorites';
import Navbar from './components/layout/Navbar';
import './styles/general.scss';
import NoteDetails from './components/notes/NoteDetails';
import EditForm from './components/notes/EditForm';

function App() {
  return <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/note/:id" component={NoteDetails} />
      <Route exact path="/edit" component={EditForm} />
    </Switch>
  </Router>
}

export default App;
