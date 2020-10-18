import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Quiz, Results } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz/:question" component={Quiz} />
          <Route path="/results" component={Results} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
