import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

function App(props){
    return(
      <>
       <nav>
         <ul>
           <li>
             <Link exact to="/">Home</Link>
           </li>
           <li>
             <Link exact to="/about">About</Link>
           </li>
           <li>
             <Link exact to="/users">Users</Link>
           </li>
         </ul>
       </nav>

       <Switch>
          <Route exact path="/about" component={About} />
               
          <Route exact path="/users" component={Users} />
              
          <Route exact path="/" component={Home} />
             
       </Switch>
      </>
    )
  }

export default App;

function Home(){
  return <h2>Home</h2>
}
function About(){
  return <h2>About</h2>
}
function Users(){
  return <h2>Users</h2>
}