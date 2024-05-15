
/**
 * TODO: DEVELOP A PERSONAL DICTIONARY FOR MAIN CLASSIFICATIONS
 * OF COMPONENTS WITHIN A GUI INCLUSIVE SOFTWARE PROJECT
 */

/**
 * CSS Styles.js purposed for handling app-wide styling
 * operations, supported by:
 * 'react-native-extended-stylesheet'
 * https://github.com/vitalets/react-native-extended-stylesheet
 */

/**
 * IMPORT vitalets' 'React Native Extended Stylesheet'
 * includes overall styling implementations of the application
 */
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * /////////////////////////////////////////////////////////////////////////////
 * SECTION [1] Standardized Stylesheets
 * including generalized and repetitive
 * styling aspects on an app-wide span
 */

/**
 * STYLESHEET setup
 * includes initial styling modifications
 * adjusting the baseline behaviour of
 * styling within the application scope
 */
const setup = EStyleSheet.create({

})

/**
 * STYLESHEET typography
 * 
 * includes specific definitions for unique
 * label or text elements in composite style,
 * 
 * as well as
 * 
 * atomic approach focusing on only
 * single or few attributes at once
 */
const typography = EStyleSheet.create({

})

/**
 * STYLESHEET colorpalette
 * includes definitions for preset colors
 * and color groups representing palettes
 */
const colorpalette = EStyleSheet.create({

})

/**
 * STYLESHEET visuals
 * inclused styling of images and iconography
 */
const visuals = EStyleSheet.create({

})

/**
 * STYLESHEET clickables
 * includes button, presseables, and other clickables
 */
const clickables = EStyleSheet.create({

})

/**
 * STYLESHEET spatial
 * includes dimensional and behavioural
 * implementations as separate definitions
 */
const spatial = EStyleSheet.create({

})

/**
 * STYLESHEET containers
 * includes styling aspects utilized
 * for containing groups of elements
 * 
 * styling implementations here should
 * primarly on dimensional and display
 * characteristics of the containment
 */
const containers = EStyleSheet.create({

})

/**
 * STYLESHEET procedurals
 * style definitions for components including
 * procedurally generation of serialized instances
 * 
 * this section may include styling of individual
 * serialization instances, including but not
 * limited to items; as well as their container
 * solely dedicated to related containment behaviour
 */
const procedurals = EStyleSheet.create({

})

/**
 * STYLESHEET forms
 * styling implementations of forms
 */
const forms = EStyleSheet.create({

})

/**
 * STYLESHEET modals
 * styling implementations of modals
 */
const modals = EStyleSheet.create({

})

/**
 * STYLESHEET alerts
 * styling implementations of alerts
 */
const alerts = EStyleSheet.create({

})

/**
 * EXPORT Global Styles
 * imported and built in app entry,
 * accessible everywhere app-wide
 */
const styles = {
  setup,
  typography,
  colorpalette,
  visuals,
  clickables,
  spatial,
  containers,
  procedurals,
  forms,
  modals,
  alerts,
}

export default styles;

/**
 * /////////////////////////////////////////////////////////////////////////////
 * /////////////////////////////////////////////////////////////////////////////
 * SECTION [3] Specific Stylesheets
 * including individual styling implementations
 * of distinct pages and/or components, to be
 * composed and exported as standalone instances,
 * separately from the previous definitions
 * 
 * IMPORTANT: each sheet below should be
 * exported during their declaration
 */

export const cardProduct = EStyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  quantityHandler: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export const screenMainHome = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  category: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const screenMainSearch = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  resultsContainer: {
    paddingBottom: 10,
  },
});

export const screenMainCart = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  cartSummary: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export const screenMainProfiles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export const screenAuthLogin = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export const screenAuthRegister = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export const screenAuthPassword = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

/*
export const screenAuthProcess = EStyleSheet.create({
  
});
*/

export const screenCategoryProducts = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
})

export const filterModal = EStyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  filterOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
})

export const screenMainProfile = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});