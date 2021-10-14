import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Todo, Exchange } from 'pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route exact path="/exchange">
          <Exchange />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
