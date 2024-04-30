
// IMPORT REACT
import React, { useEffect, useState } from 'react';

// IMPORT REACT-NATIVE
import { Text, View } from 'react-native';

// IMPORT REACT-REDUX
import { useSelector, useDispatch } from 'react-redux'

// IMPORT EXPO 
import { StatusBar } from 'expo-status-bar';

// IMPORT STYLE
import styles from '../styles';

// IMPORT MAIN TABS SCREEN
import TabsMain from './screens/tabs/TabsMain';

const MotherComponent = () => {

  /* STATE VARIABLE(S) */
  /* const variable = useSelector(state => state.variable) */

  /* DISPATCH */
  const dispatch = useDispatch();

  /* TODO implement logic */

  return(

    // TODO implement composition

    <TabsMain/>
    
  );
}

export default MotherComponent