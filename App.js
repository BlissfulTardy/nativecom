
// IMPORT React
import React from 'react';
// IMPORT React-Redux
import { Provider } from 'react-redux';
// IMPORT Redux-Store
import store from './src/redux_store';
// IMPORT Firebase Auth
import useAuth from './src/hooks/useAuth';
// IMPORT Stylesheet
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
// IMPORT Components
import AppletMain from './src/screens/applets/AppletMain';
import AppletAuth from './src/screens/applets/AppletAuth';

// BUILD Stylesheet with global variables

/**
 * universal
 * rootSetup
 * colorScheme
 * dimensions
 * misc
 */

EStyleSheet.build({
  // TODO REMOVE TEST
  $outline: 1,
  // TODO REMOVE TEST
  /* [1] GLOBAL VARIABLES */
  /* [1.0] Universal Variables */
  /* [1.1] Root Setup Variables */
  /* [1.2] Color Scheme Variables */
  /* [1.2.1] Light Theme Palette */
  /* [1.2.2] Dark Theme Palette */
  /* [1.2.3] Persistent Colors */
  $colorAppPrimary: "#0059bb",
  /* [1.3] Dimensional Variables */
  $paddingPageDefault: '10px',
  $heightAppHeader: '60px',
  $heightAppTabBar: '60px',
  /* [1.*] Misc Variables */
  /* [2] MEDIA QUERIES */
  /* [2.0] Universal Variables */
  /* ... */
});

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