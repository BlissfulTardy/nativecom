
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

  labelHeaderDefault: {
    color: '#fff', // TODO: adjust color
    fontSize: 26,
    fontWeight: 'bold',
  },

  // DEFAULT CONTAINER/SECTION LABEL
  labelSectionDefault: {
    paddingVertical: 20, // Temporary
    color: '$colorAppPrimary', // TODO: adjust color
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  labelTitleDefault: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '$colorAppPrimary',
    textAlign: 'center',
  },

  labelbuttonGridCategory: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  labelLoggedUser: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  nameCardSliderProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EEE'
  },

  categoryCardSliderProduct: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BBB'
  },

  priceCardSliderProduct: {
    fontSize: 12,
    color: '#888',
  },

  nameCartProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },

  descriptionCartProduct: {
    fontSize: 14,
    marginTop: 5,
  },

  categoryCartProduct: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },

  priceCartProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },

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

  imageCardSliderProduct: {
    width: '100%',
    height: 150, // TODO: adjust if needed
    resizeMode: 'cover', // fill entire space without distortion
    marginBottom: 10,
    borderRadius: 5,
  },

  imageCartProduct: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },

})

/**
 * STYLESHEET clickables
 * includes button, presseables, and other clickables
 */
const clickables = EStyleSheet.create({

  buttonGridCategory: {
    flex: 1,
    aspectRatio: 1.5,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '$colorAppPrimary',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Buttons of ScreenMainCart actions
  buttonClearCart: {
    width: '40%',
    backgroundColor: '#dc3545', // red
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCheckoutCart: {
    width: '40%',
    backgroundColor: '$colorAppPrimary', // blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})

/**
 * STYLESHEET spatial
 * includes dimensional and behavioural
 * implementations as separate definitions
 */
const spatial = EStyleSheet.create({

  gapVertical10: {
    paddingTop: 10,
  },
  
  gapVeertical15: {
    paddingTop: 15,
  },

  paddingDefault: {
    padding: 20,
  },

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

  // OVERLAY CONTAINERS (headers, footers, tabbars etc.)

  headerDefault: {
    height: '$heightAppHeader',
    backgroundColor: '$colorAppPrimary', // TODO: adjust color
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerDefault: {
    /* TODO: emptied this as not functioning intendedly */
  },

  // PAGE CONTAINERS

  pageTabs: {
    flex: 1,
    //padding: '$paddingPageDefault'
  },

  pageDefault: {
    flex: 1,
    //padding: '$paddingPageDefault'
  },

  pageCentered: {
    flex: 1,
    // TODO: revise default alingment behaviour if required later
    alignItems: 'center',
    justifyContent: 'center',
  },

  // STANDARDIZED CONTAINERS

  /**
   * TODO: removing this implementation to migrate such
   * implementations directly to the typography section
   */
  containerTitleDefault: {
    padding: 10
  },

  sectionDefault: {
    flex: 1,
    paddingHorizontal: 0,
    // paddingVertical: 20,
  },

  containerScroller: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    flex: 1,
    padding: '0 20px'
  },

  containerSlider: {
    flex: 1,
    paddingHorizontal: -10,
    // paddingVertical: 10,
  },

  containerGrid: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  // TODO either migrate or integrate special containers

  cardSliderProduct: {
    backgroundColor: '#fff', // TODO change color
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    width: 150, // TODO adjust if needed / feasible
  },

  CardProduct: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '#ddd',
    padding: '10px',
    margin: '10px 0',
    // calculate width for 2 items per row
    width: 'calc(50% - 10px)',
  },

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
    // ScreenMainProfile Menu
    menuProfile: {
      width: '80%',
      alignItems: 'center',
    },
    itemMenuProfile: {
      width: '100%',
      paddingVertical: 15,
      paddingHorizontal: 15,
      marginVertical: '2.5%',
      backgroundColor: '$colorAppPrimary',
      borderRadius: 5,
    },
    textItemMenuProfile: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
    },
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
 * SECTION [3] Specialized Stylesheets
 * including individual styling implementations
 * of distinct pages and/or components, to be
 * composed and exported as standalone instances,
 * separately from the previous definitions
 * 
 * IMPORTANT: each sheet below should be
 * exported during their declaration
 */

/**
 * SUBSECTION Pages
 */

/**
 * SUBSECTION Components
 */

export const screenMainCartFoot = EStyleSheet.create({

  containerBottomScreenMainCart: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  priceContaineBottomScreenMainCart: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonsContainerBottomScreenMainCart: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

})

export const sectionSerializerSearcher = EStyleSheet.create({

  componentSerializerSearcher: {
    padding: '10px',
  },

  searchbarSerializerSearcher: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 50,
    marginHorizontal: '10%',
    marginBottom: '10px',
  },

  inputSearchbarSerializerSearcher: {
    flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: '#333',
    borderRadius: 10,
    paddingLeft: 10,
  },

  containerSerializerSearcherButtonsSearchbar: {
    width: '75%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonFilter: {
    width: '30%',
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonClear: {
    width: '30%',
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonSearch: {
    width: '30%',
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  buttonCloseModal: {

  },

})