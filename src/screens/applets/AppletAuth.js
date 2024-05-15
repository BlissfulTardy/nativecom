
// IMPORT React
import React, { useEffect, useState } from 'react';
// IMPORT React-Redux
import { Provider, useSelector, useDispatch } from 'react-redux';
// IMPORT React-Navigation
import { NavigationContainer } from '@react-navigation/native';
// IMPORT Store
import store from '../../redux_store/store';
// IMPORT Navigation
import NavigatorAuth from '../../navigation/NavigatorAuth';

/**
 * AppletAuth materializes the secondary part of the
 * composite application responsible with authorizing
 * users, encountered prior to the main application
 * @returns 
 */
const AppletAuth = () => {

  return(
    <NavigatorAuth/>
  );
}

export default AppletAuth