
// IMPORT React
import React, { useEffect, useState } from 'react';
// IMPORT React-Redux
import { Provider, useSelector, useDispatch } from 'react-redux';
// IMPORT React-Native
import { View } from 'react-native';
// IMPORT Store
import store from '../../redux_store';
// IMPORT Navigation
import NavigatorMain from '../../navigation/NavigatorMain';
// IMPORT Styles
import styles from '../../../styles';
// IMPORT Component
import HeaderApp from '../../components/common/HeaderApp';

/**
 * AppletMain materializes the main part of the application
 * past the previous authentication sub-app, providing it
 * context via the redux provider wrapper component
 * @returns 
 */
const AppletMain = () => {

  return(
    <Provider store={store}>
      <View style={styles.pageDefault}>
        <HeaderApp/>
        <NavigatorMain/>
      </View>
    </Provider>
  );
}

export default AppletMain