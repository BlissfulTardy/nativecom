
// IMPORT React
import React from 'react';
// IMPORT React-Redux
import { Provider } from 'react-redux';
// IMPORT Redux-Store
import store from './src/redux_store';
// IMPORT Firebase Auth
import useAuth from './src/hooks/useAuth';
// IMPORT Components
import AppletMain from './src/screens/applets/AppletMain';
import AppletAuth from './src/screens/applets/AppletAuth';

// COMPONENT App.js
const App = () => {

  // HOOK Authentication User
  const { currUser } = useAuth();

  /* RENDERING App.js */
  return (
    <AppletMain/>
    // currUser ? <AppletMain/> : <AppletAuth/>
  )

}

export default App