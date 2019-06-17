import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calculator from '../componets/Calculator';

function Index() {
    return <h2>Home</h2>;
}
  
function About() {
    return <h2>About</h2>;
}
  
function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                {/* 流浪器中路径和route中path匹配 */}
                <Link to="/users_2/">Users</Link>
              </li>
              <li>
                  <Link to="/calc/">calc</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users_2/" component={Users} />
          <Route path="/calc/" component={Calculator} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;