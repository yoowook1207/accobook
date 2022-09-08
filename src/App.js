import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from "./pages/Landing"

const App = () => <Landing />;


// function App() {
//   return (
//     <div className="App">
//       <ApolloProvider client={client}>
//         <Router>
//           <Switch>
//             {Auth.loggedIn() ? (
//             <Route exact path ="/" component={Dashboard} />
//             ) : (
//               <Route exact path ="/" component={Landing} />
//             )}
//             <Route exact path ="/signup" component={Signup} />
//             <Route exact path ="/login" component={Login} />
//             <Route exact path ="/dashboard" component={Dashboard} />
//             <Route component={NoMatch} />
//           </Switch>

//         </Router>
//       </ApolloProvider>
//     </div>
//   );
// }

export default App;
