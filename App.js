
// IMPORT REACT
import React from 'react';

// IMPORT REDUX PROVIDER
import { Provider } from 'react-redux';

// IMPORT REDUX STORE
import store from './src/redux_store';

// IMPORT MOTHER COMPONENT
import MotherComponent from './src/MotherComponent';

// ENTRY POINT APP.JS
const App = () => {

  /* TODO implement logic */

  return (
    /* REDUX PROVIDER */
    <Provider store={store}>
      <MotherComponent />
    </Provider>
  );

}

export default App