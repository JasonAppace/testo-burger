import {StyleSheet, Dimensions, Platform} from 'react-native';
import {GlobalStyle, Window, Font, Color} from '../../../globalStyle/Theme';

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    color: Color.tertiary,
    lineHeight: 24,
    fontFamily: Font.Urbanist_Bold,
  },
  CartMainContainer: {
    flexDirection: 'row',
    paddingTop: 0,
  },
  ImgStyle: {
    width: Window.height / 9,
    borderRadius: 20,
    height: Window.height / 9,
  },

  TopTextStyle: {
    color: Color.headingSm,
    fontSize: 16,
    fontFamily: Font.Urbanist_Black,
  },
  MiddleTextStyle: {
    color: Color.greyscale,
    fontSize: 14,
    fontFamily: Font.Urbanist_Medium,
    paddingHorizontal: 2,
  },
  MinusStyle: {
    color: Color.headingSm,
    fontSize: 16,
  },
  NumStyle: {
    color: Color.headingSm,
    fontSize: 14,
    fontFamily: Font.Urbanist_Bold,
    marginHorizontal: 10,
  },
  AddStyle: {
    color: 'white',
    borderRadius: 50,
    fontSize: 16,
  },
  LastTextStyle: {
    color: Color.primary,
    fontSize: 14,
    fontFamily: Font.Urbanist_Black,
  },

  TopIconStyle: {
    // padding: 15,
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.light,
  },

  heartIcon: {
    fontSize: 18,
    color: Color.lightRed,
    borderRadius: 50,
  },
  headingRow: {
    flexDirection: 'row',
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default styles;
