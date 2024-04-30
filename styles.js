
// IMPORT REACT-NATIVE STYLESHEET
import { StyleSheet } from 'react-native';

// INCLUDES THE OVERALL STYLESHEET COMPOSITION OF THE APPLICATION

/**
 * UTIL: intended for very basic, most primitive and universal
 * styling definitions, mostly few or single styling properties
 */
const util = StyleSheet.create({
  gapVertical10: {
    paddingTop: 10,
  },
  gapVeertical15: {
    paddingTop: 15,
  }
})

// PAGES
const pages = StyleSheet.create({
  pageTabs: {
    flex: 1,
  },
  pageDefault: {
    flex: 1,
    // TODO: revise default alingment behaviour if required later
    alignItems: 'center',
  },
  pageCentered: {
    flex: 1,
    // TODO: revise default alingment behaviour if required later
    alignItems: 'center',
    justifyContent: 'center',
  }
})

// CONTAINERS
const containers = StyleSheet.create({
  headerDefault: {
    height: 60,
    backgroundColor: '#007bff', // TODO: adjust color
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0', // TODO: adjust color
    height: 50,
    alignItems: 'center',
  },
  paddingDefault: {
    padding: 20,
  },
  containerTitleDefault: {
    padding: 10
  },
  // SECTION AS AN IN-PAGE CONTAINER
  sectionDefault: {
    paddingHorizontal: 0,
    marginVertical: 20,
  },
  containerScroller: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  containerSlider: {
    paddingHorizontal: -10,
    paddingVertical: 10,
  },
  containerGrid: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

// COMPONENTS
const components = StyleSheet.create({
  // ItemCartCount (in CardCartProduct)
  containerItemCartCount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  textItemCartCount: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    fontSize: 16,
    aspectRatio: 1,
  },
  buttonItemCartCount: {
    height: 50,
    width: 50,
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    aspectRatio: 1,
    color: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonItemCartCount: {

  },
  displayItemCartCount: {
    flex: 1,
    minHeight: 50,
    minWidth: 50,
    display: 'flex',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDisplayItemCartCount: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 46,
  },
  // ----------------------------------
  // ScreenMainCart Bottom
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
  //-----------------------------------
  // SectionSerializerSearcher
  componentSerializerSearcherSearchbar: {

  },
  searchbarSerializerSearcher: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 50,
    marginHorizontal: '10%',
    marginVertical: 10,
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
});

// LABELS
const labels = StyleSheet.create({
  labelHeaderDefault: {
    color: '#fff', // TODO: adjust color
    fontSize: 26,
    fontWeight: 'bold',
},
  // DEFAULT CONTAINER/SECTION LABEL
  labelSectionDefault: {
    paddingLeft: 25,
    color: '#0037bb', // TODO: adjust color
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelTitleDefault: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0059DD',
    textAlign: 'center',
  },
  labelButtonGridCategories: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  labelLoggedUser: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

// TEXT
const text = StyleSheet.create({
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

// IMAGES
const images = StyleSheet.create({
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

// BUTTONS & PRESSABLES
const pressables = StyleSheet.create({
  buttonGridCategories: {
    flex: 1,
    aspectRatio: 1.5,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#001499',
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
    backgroundColor: '#007bff', // blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// CARDS
const cards = StyleSheet.create({
  cardSliderProduct: {
    backgroundColor: '#fff', // TODO change color
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    width: 200, // TODO adjust if needed / feasible
  },
  cardCartProduct: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    width: '100%', // take up the width of the viewport
  },
})

// LISTS / MENUS
const lists = StyleSheet.create({
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
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  textItemMenuProfile: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  // --------------------------------
})

// FORMS
const forms = StyleSheet.create({

})

// MODALS
const modals = StyleSheet.create({

})

// ALERTS
const alerts = StyleSheet.create({

})


/**
 * FLATTEN INTO SINGULAR STYLESHEET TO BE EXPORTED
 * as operation requires every styling object to
 * be announced individually, we are using the
 * spread operator instead of plain object ref
 */
const styles = StyleSheet.flatten(
  [
    util,
    pages,
    containers,
    components,
    labels,
    text,
    images,
    pressables,
    cards,
    lists,
    forms,
    modals,
    alerts
  ]
);

export default styles;