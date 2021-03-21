import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
