// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import './App.scss'

// Reminder of how Redux works, Provider provides a store which holds all the states of application.
// Reducers handle state transactions
// Actions describe how to modify the state
// Actions get dispatched to the redux store from a Component.  The store sends the action to the reducer, the reducer handles the actions, returns a new state.
// useSelector() allows components to subscribe to state changes.
// useDispatch() allows components to trigger state changes.

// Overall the flow is Component >
// dispatch Action to Store >
// Store sends Action to Reducer >
// Reducer returns new State Values >
// Values updated in Store >
// Component reads from Store to reflect any changes.

const App = () => {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
};

export default App;

