

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reducer, { initialState } from './reducer';
// import { StateProvider } from './StateProvider';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import the service worker registration file

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>
// );

// // Register the service worker to make the app work offline and load faster
// serviceWorkerRegistration.register();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

