import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../../components/utility/Colors';
import {StatusBarHeight} from '../../components/utility/headerMethods';

const {width, height} = Dimensions.get('screen');

/**
 * Return width & height of the screen
 * @returns Width of the screen
 * @returns Height of the screen
 */
export const dimensions = {
  width,
  height,
};

/**
 * Base styles for a responsive layout
 */
export const baseStyles = StyleSheet.create({
  /**
   * @returns text font of regular typeface of standard Font Size
   */
  txt: {
    fontSize: 14,
    fontFamily: 'reg',
  },
  /**
   * @returns text font of medium typeface of standard Font Size
   */
  txtMed: {
    fontFamily: 'med',
  },
  /**
   * @returns text font of bold typeface of standard Font Size
   */
  txtBold: {
    fontFamily: 'bold',
  },
  /**
   * @returns text font of regular typeface of 32 pixels of Font Size
   */
  heading: {
    fontSize: 32,
    fontFamily: 'reg',
  },
  /**
   * @returns text font of medium typeface of 32 pixels of Font Size
   */
  heading_med: {
    fontSize: 32,
    fontFamily: 'med',
  },
  /**
   * @returns text font of bold typeface of 32 pixels of Font Size
   */
  heading_bold: {
    fontSize: 32,
    fontFamily: 'bold',
  },
  /**
   * @returns text font of regular typeface of 24 pixels of Font Size
   */
  subheading: {
    fontSize: 24,
    fontFamily: 'reg',
  },
  /**
   * @returns text font of medium typeface of 24 pixels of Font Size
   */
  subheading_med: {
    fontSize: 24,
    fontFamily: 'med',
  },
  /**
   * @returns text font of bold typeface of 24 pixels of Font Size
   */
  subheading_bold: {
    fontSize: 24,
    fontFamily: 'bold',
  },
  /**
   * @returns text font of regular typeface of 40 pixels of Font Size
   */
  title: {
    fontSize: 40,
    fontFamily: 'reg',
  },
  /**
   * @returns text font of medium typeface of 40 pixels of Font Size
   */
  title_med: {
    fontSize: 40,
    fontFamily: 'med',
  },
  /**
   * @returns text font of bold typeface of 40 pixels of Font Size
   */
  title_bold: {
    fontSize: 40,
    fontFamily: 'bold',
  },
  /**
   * @returns text font of regular typeface of 18 pixels of Font Size
   */
  subtitle: {
    fontSize: 18,
    fontFamily: 'reg',
  },
  /**
   * @returns text font of medium typeface of 18 pixels of Font Size
   */
  subtitle_med: {
    fontSize: 18,
    fontFamily: 'med',
  },
  /**
   * @returns text font of bold typeface of 18 pixels of Font Size
   */
  subtitle_bold: {
    fontSize: 18,
    fontFamily: 'bold',
  },
  /**
   * Align text to the center
   */
  textAlignCenter: {
    textAlign: 'center',
  },
  /**
   * Vertical align text to the center
   */
  textAlignCenterVertical: {
    textAlignVertical: 'center',
  },
  /**
   * Align items to the center & Justify items to the center
   */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  /**
   * Align items to the center & Justify items to the center.
   * @returns width 100%
   * @returns flex 1
   */
  flexCenter: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /**
   * @returns flex 1
   */
  flex: {
    flex: 1,
  },
  /**
   * @returns width 100%
   * @returns height 100%
   */
  widthHeight100: {
    width: '100%',
    height: '100%',
  },
  /**
   * Displays items horizontally
   */
  inline: {
    flexDirection: 'row',
  },
  /**
   * Displays items horizontally & Align items to the center.
   */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Hides the overflow
   */
  o_hidden: {
    overflow: 'hidden',
  },
  /**
   * Displays the overflow
   */
  o_visible: {
    overflow: 'visible',
  },
  /**
   * Aligns items to the center
   */
  ai_center: {
    alignItems: 'center',
  },
  /**
   * Aligns items to the flex-start
   */
  ai_start: {
    alignItems: 'flex-start',
  },
  /**
   * Aligns items to the flex-end
   */
  ai_end: {
    alignItems: 'flex-end',
  },
  /**
   * Aligns self to the center
   */
  as_center: {
    alignSelf: 'center',
  },
  /**
   * Justify content to the center
   */
  jc_center: {
    justifyContent: 'center',
  },
  /**
   * Justify content to the space-between
   */
  jc_space_between: {
    justifyContent: 'space-between',
  },
  /**
   * Justify content to the space-evenly
   */
  jc_space_evenly: {
    justifyContent: 'space-evenly',
  },
  /**
   * Justify content to the space-around
   */
  jc_space_around: {
    justifyContent: 'space-around',
  },
  /**
   * Justify content to the flex-start
   */
  jc_flex_start: {
    justifyContent: 'flex-start',
  },
  /**
   * Justify content to the flex-end
   */
  jc_flex_end: {
    justifyContent: 'flex-end',
  },
  /**
   * @returns width of device screen
   */
  width: {
    width: width,
  },
  /**
   * @returns 25% width
   */
  width25: {
    width: '25%',
  },
  /**
   * @returns 30% width
   */
  width30: {
    width: '30%',
  },
  /**
   * @returns 35% width
   */
  width35: {
    width: '35%',
  },
  /**
   * @returns 40% width
   */
  width40: {
    width: '40%',
  },
  /**
   * @returns 45% width
   */
  width45: {
    width: '45%',
  },
  /**
   * @returns 50% width
   */
  width50: {
    width: '50%',
  },
  /**
   * @returns 55% width
   */
  width55: {
    width: '55%',
  },
  /**
   * @returns 60% width
   */
  width60: {
    width: '60%',
  },
  /**
   * @returns 65% width
   */
  width65: {
    width: '65%',
  },
  /**
   * @returns 70% width
   */
  width70: {
    width: '70%',
  },
  /**
   * @returns 75% width
   */
  width75: {
    width: '75%',
  },
  /**
   * @returns 80% width
   */
  width80: {
    width: '80%',
  },
  /**
   * @returns 85% width
   */
  width85: {
    width: '85%',
  },
  /**
   * @returns 90% width
   */
  width90: {
    width: '90%',
  },
  /**
   * @returns 95% width
   */
  width95: {
    width: '95%',
  },
  /**
   * @returns 100% width
   */
  width100: {
    width: '100%',
  },
  /**
   * @returns width minus 20px
   */
  width20: {
    width: width - 20,
  },
  /**
   * @returns height of device screen
   */
  height: {
    height: height,
  },
  /**
   * @returns 25% height
   */
  height25: {
    height: '25%',
  },
  /**
   * @returns 30% height
   */
  height30: {
    height: '30%',
  },
  /**
   * @returns 35% height
   */
  height35: {
    height: '35%',
  },
  /**
   * @returns 40% height
   */
  height40: {
    height: '40%',
  },
  /**
   * @returns 45% height
   */
  height45: {
    height: '45%',
  },
  /**
   * @returns 50% height
   */
  height50: {
    height: '50%',
  },
  /**
   * @returns 55% height
   */
  height55: {
    height: '55%',
  },
  /**
   * @returns 60% height
   */
  height60: {
    height: '60%',
  },
  /**
   * @returns 65% height
   */
  height65: {
    height: '65%',
  },
  /**
   * @returns 70% height
   */
  height70: {
    height: '70%',
  },
  /**
   * @returns 75% height
   */
  height75: {
    height: '75%',
  },
  /**
   * @returns 80% height
   */
  height80: {
    height: '80%',
  },
  /**
   * @returns 85% height
   */
  height85: {
    height: '85%',
  },
  /**
   * @returns 90% height
   */
  height90: {
    height: '90%',
  },
  /**
   * @returns 95% height
   */
  height95: {
    height: '95%',
  },
  /**
   * @returns 100% height
   */
  height100: {
    height: '100%',
  },
  /**
   * @returns Width of device screen
   * @returns Height of device screen
   */
  widthAndHeight: {
    width: width,
    height: height,
  },
  /**
   * @returns Padding of 5px
   */
  p5: {
    padding: 5,
  },
  /**
   * @returns Padding of 10px
   */
  p10: {
    padding: 10,
  },
  /**
   * @returns Padding of 20px
   */
  p20: {
    padding: 20,
  },
  /**
   * @returns Vertical padding of 5px
   */
  pv5: {
    paddingVertical: 5,
  },
  /**
   * @returns Vertical padding of 10px
   */
  pv10: {
    paddingVertical: 10,
  },
  /**
   * @returns Vertical padding of 20px
   */
  pv20: {
    paddingVertical: 20,
  },
  /**
   * @returns Horizontal padding of 5px
   */
  ph5: {
    paddingHorizontal: 5,
  },
  /**
   * @returns Horizontal padding of 10px
   */
  ph10: {
    paddingHorizontal: 10,
  },
  /**
   * @returns Horizontal padding of 20px
   */
  ph20: {
    paddingHorizontal: 20,
  },
  /**
   * @returns Left padding of 20px
   */
  pl10: {
    paddingLeft: 10,
  },
  /**
   * @returns Right padding of 10px
   */
  pr10: {
    paddingRight: 10,
  },
  /**
   * @returns Top padding of 10px
   */
  pt10: {
    paddingTop: 10,
  },
  /**
   * @returns Bottom padding of 10px
   */
  pb10: {
    paddingBottom: 10,
  },
  /**
   * @returns Left padding of 20px
   */
  pl20: {
    paddingLeft: 20,
  },
  /**
   * @returns Right padding of 20px
   */
  pr20: {
    paddingRight: 20,
  },
  /**
   * @returns Top padding of 20px
   */
  pt20: {
    paddingTop: 20,
  },
  /**
   * @returns Bottom padding of 20px
   */
  pb20: {
    paddingBottom: 20,
  },
  /**
   * @returns Margin of 5px
   */
  m5: {
    margin: 5,
  },
  /**
   * @returns Margin of 10px
   */
  m10: {
    margin: 10,
  },
  /**
   * @returns Margin of 20px
   */
  m20: {
    margin: 20,
  },
  /**
   * @returns Vertical margin of 5px
   */
  mv5: {
    marginVertical: 5,
  },
  /**
   * @returns Vertical margin of 10px
   */
  mv10: {
    marginVertical: 10,
  },
  /**
   * @returns Vertical margin of 20px
   */
  mv20: {
    marginVertical: 20,
  },
  /**
   * @returns Horizontal margin of 5px
   */
  mh5: {
    marginHorizontal: 5,
  },
  /**
   * @returns Horizontal margin of 10px
   */
  mh10: {
    marginHorizontal: 10,
  },
  /**
   * @returns Horizontal margin of 20px
   */
  mh20: {
    marginHorizontal: 20,
  },
  /**
   * @returns Left margin of 5px
   */
  ml5: {
    marginLeft: 5,
  },
  /**
   * @returns Left margin of 10px
   */
  ml10: {
    marginLeft: 10,
  },
  /**
   * @returns Left margin of 20px
   */
  ml20: {
    marginLeft: 20,
  },
  /**
   * @returns Right margin of 10px
   */
  mr10: {
    marginRight: 10,
  },
  /**
   * @returns Top margin of 10px
   */
  mt10: {
    marginTop: 10,
  },
  /**
   * @returns Bottom margin of 10px
   */
  mb10: {
    marginBottom: 10,
  },
  /**
   * @returns Right margin of 20px
   */
  mr20: {
    marginRight: 20,
  },
  /**
   * @returns Top margin of 20px
   */
  mt20: {
    marginTop: 20,
  },
  /**
   * @returns Bottom margin of 20px
   */
  mb20: {
    marginBottom: 20,
  },
  /**
   * @returns Border radius of 3px
   */
  br3: {
    borderRadius: 3,
  },
  /**
   * @returns Border radius of 5px
   */
  br5: {
    borderRadius: 5,
  },
  /**
   * @returns Border radius of 10px
   */
  br10: {
    borderRadius: 10,
  },
  /**
   * @returns Border radius of 15px
   */
  br15: {
    borderRadius: 15,
  },
  /**
   * @returns Border radius of 20px
   */
  br20: {
    borderRadius: 20,
  },
  /**
   * @returns Border radius of 25px
   */
  br25: {
    borderRadius: 25,
  },
  /**
   * @returns Border radius of 30px
   */
  br30: {
    borderRadius: 30,
  },
  /**
   * @returns Border Top radius of 3px
   */
  brt3: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  /**
   * @returns Border Top radius of 5px
   */
  brt5: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  /**
   * @returns Border Top radius of 10px
   */
  brt10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  /**
   * @returns Border Top radius of 15px
   */
  brt15: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  /**
   * @returns Border Top radius of 20px
   */
  brt20: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  /**
   * @returns Border Top radius of 25px
   */
  brt25: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  /**
   * @returns Border Top radius of 30px
   */
  brt30: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  /**
   * @returns Border Bottom radius of 3px
   */
  brb3: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  /**
   * @returns Border Bottom radius of 5px
   */
  brb5: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  /**
   * @returns Border Bottom radius of 10px
   */
  brb10: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  /**
   * @returns Border Bottom radius of 15px
   */
  brb15: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  /**
   * @returns Border Bottom radius of 20px
   */
  brb20: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  /**
   * @returns Border Bottom radius of 25px
   */
  brb25: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  /**
   * @returns Border Bottom radius of 30px
   */
  brb30: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  /**
   * @returns Border Color of white
   * @returns Border width of 1px
   */
  b1_white: {
    borderColor: 'white',
    borderWidth: 1,
  },
  /**
   * @returns Border color of white
   * @returns Border width of 2px
   */
  b2_white: {
    borderColor: 'white',
    borderWidth: 2,
  },
  /**
   * @returns Border color of primary
   * @returns Border width of 1px
   */
  b1_primary: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  /**
   * @returns Border color of primary
   * @returns Border width of 2px
   */
  b2_primary: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  /**
   * @returns Border color of accent
   * @returns Border width of 1px
   */
  b1_accent: {
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  /**
   * @returns Border color of accent
   * @returns Border width of 2px
   */
  b2_accent: {
    borderColor: Colors.accent,
    borderWidth: 2,
  },
  /**
   * @returns Z index of 1
   */
  zi1: {
    zIndex: 1,
  },
  /**
   * @returns Z index of 100
   */
  zi100: {
    zIndex: 100,
  },
  /**
   * @returns Z index of 1000
   */
  zi1000: {
    zIndex: 1000,
  },
  /**
   * @returns absolute position of an item
   */
  p_absolute: {
    position: 'absolute',
  },
  /**
   * @returns relative position of an item
   */
  p_relative: {
    position: 'relative',
  },
  /**
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 5px
   * @returns Align items to the center
   * @returns Justify content to the center
   * @returns Background color of light Gray
   */
  typeItem: {
    width: width - 20,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
  /**
   * Defines an adaptive cross-platform card style of an item
   * @platform Android
   * @platform IOS
   */
  card: {
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,

    // Android
    elevation: 1,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',

    backgroundColor: 'white',
  },
  /**
   * @returns Status Bar Height as top padding
   */
  SBH_pt: {
    paddingTop: StatusBarHeight,
  },
  /**
   * @returns Status Bar Height as top margin
   */
  SBH_mt: {
    marginTop: StatusBarHeight,
  },
  /**
   * Can be used to test the alignment of an item
   * @returns Border width of 1px
   * @returns Border color of red
   */
  test: {
    borderWidth: 1,
    borderColor: 'red',
  },
  /**
   * Can be used to test the alignment of an item
   * @returns Border width of 1px
   * @returns Border color of green
   */
  test2: {
    borderWidth: 1,
    borderColor: 'green',
  },

  /////////////////
  /////////////////
  /////////////////

  /**
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Hides overflow
   * @returns Background color of light gray
   */
  fieldContainer: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: Colors.lightGray,
  },
  /**
   * @returns Height of 50px
   */
  field: {
    height: 50,
  },
  /**
   * Defines a white border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of white
   * @returns Border width of 1px
   */
  whiteBtnB1Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 1,
  },
  /**
   * Defines a white border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of white
   * @returns Border width of 2px
   */
  whiteBtnB2Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
  },
  /**
   * Defines a primary border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of primary
   * @returns Border width of 1px
   */
  primaryBtnB1Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  /**
   * Defines a primary border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of primary
   * @returns Border width of 2px
   */
  primaryBtnB2Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  /**
   * Defines a accent border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of accent
   * @returns Border width of 1px
   */
  accentBtnB1Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  /**
   * Defines a accent border button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of accent
   * @returns Border width of 2px
   */
  accentBtnB2Full: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.accent,
    borderWidth: 2,
  },
  /**
   * Defines a white border button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of white
   * @returns Border width of 1px
   */

  whiteBtnB1Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 1,
  },
  /**
   * Defines a white border button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of white
   * @returns Border width of 2px
   */
  whiteBtnB2Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
  },
  /**
   * Defines a Primary border button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of primary
   * @returns Border width of 1px
   */
  primaryBtnB1Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  /**
   * Defines a primary border button of Half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of Primary
   * @returns Border width of 2px
   */
  primaryBtnB2Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  /**
   * Defines a accent border button of Half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of accent
   * @returns Border width of 1px
   */
  accentBtnB1Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  /**
   * Defines a accent border button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Border color of accent
   * @returns Border width of 2px
   */
  accentBtnB2Half: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.accent,
    borderWidth: 2,
  },
  /**
   * Defines a white button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of white
   */
  whiteBtnFullWidth: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  /**
   * Defines a half white button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of half white
   */
  halfWhiteBtnFullWidth: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  /**
   * Defines a primary button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of primary
   */
  primaryBtnFullWidth: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
  },
  /**
   * Defines a accent button of full width
   * @returns Width minus 20px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of accent
   */
  accentBtnFullWidth: {
    width: width - 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.accent,
  },
  /**
   * Defines a white button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of white
   */
  whiteBtnHalfWidth: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  /**
   * Defines a half white button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of half white
   */
  halfWhiteBtnHalfWidth: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  /**
   * Defines a primary button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of primary
   */
  primaryBtnHalfWidth: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
  },
  /**
   * Defines a primary small icon button
   * @returns Width of 30px
   * @returns Height of 30px
   * @returns Border radius of 5px
   * @returns Border width of 2px
   * @returns Border color of primary
   */
  primarySquareBtnWithBorder30: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  /**
   * Defines a primary small icon button
   * @returns Width of 20px
   * @returns Height of 20px
   * @returns Border radius of 5px
   * @returns Border width of 2px
   * @returns Border color of primary
   */
  primarySquareBtnWithBorder20: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  /**
   * Defines a accent button of half width
   * @returns Half width minus 10px
   * @returns Height of 50px
   * @returns Border radius of 25px
   * @returns Background color of accent
   */
  accentBtnHalfWidth: {
    width: width / 2 - 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.accent,
  },

  /**
   * Footer Panel
   */
  footerPanel: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
