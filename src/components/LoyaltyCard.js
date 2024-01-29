import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BorderRadius, Color, Font, Window} from '../globalStyle/Theme';
import {LoyaltySvg, ReferSvg} from '../assets/svgs/HomePage';
import {useNavigation} from '@react-navigation/native';

const LoyaltyCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'BottomTabScreen',
              state: {
                routes: [
                  {
                    name: 'ProfileStack',
                    state: {
                      routes: [
                        {
                          name: 'Loyalty',
                          params: {
                            fromHome: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        })
      }>
      <ImageBackground
        imageStyle={styles.img}
        style={styles.bg}
        source={require('../assets/images/pics/loyaltyBg.jpg')}>
        <Text style={styles.title}>Loyalty points</Text>
        <Text style={styles.subTitle}>tap to see points!</Text>
        <View style={styles.svgContainer}>
          <LoyaltySvg width={Window.width / 3} height={Window.width / 2} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LoyaltyCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius,
    marginHorizontal: Window.fixPadding * 2,
    height: 113,
    marginVertical: 15,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 22,
  },
  img: {
    resizeMode: 'cover',
    borderRadius: BorderRadius,
  },
  bg: {
    width: '100%',
    height: '100%',
    borderRadius: BorderRadius,
    justifyContent: 'center',
  },
  svgContainer: {
    width: Window.width / 2.2,
    height: Window.width / 2.2,
    position: 'absolute',
    right: -40,
    top: -40,
  },
  title: {
    fontSize: 24,
    fontFamily: Font.Urbanist_Black,
    color: Color.light,
    width: Window.width / 2.2,
    marginLeft: 25,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Font.Urbanist_Regular,
    color: Color.light,
    marginLeft: 25,
  },
});
