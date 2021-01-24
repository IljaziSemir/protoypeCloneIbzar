import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from './containers/Accueil/Accueil';
import Erreur404 from './component/Erreur/Erreur404/Erreur404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route render={() => <Erreur404 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
