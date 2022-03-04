import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Coins from './pages/Coins';
import Portfolio from './pages/Portfolio';

function App(props){
    return(
      <>
       <nav>
         <ul>
           <li>
             <Link exact to="/">Coins</Link>
           </li>
           <li>
             <Link exact to="/portfolio">Portfolio</Link>
           </li>
         </ul>
       </nav>

       <Switch>     
          <Route exact path="/portfolio" component={Portfolio} />   
          <Route exact path="/" component={Coins} />   
       </Switch>
      </>
    )
  }

export default App;



