/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  GlobalStyle,
  Font,
  Window,
  Color,
  BorderRadius,
} from '../../../globalStyle/Theme';
import Icon from '../../../core/Icon';
import styles from './HomePageStyle';
import {OrderTypeData} from './HomePageDetails';
import {useDispatch, useSelector} from 'react-redux';
import {
  DeliverySvgs,
  LoyaltySvg,
  PickupSvgs,
  ReferSvg,
} from '../../../assets/svgs/HomePage';
import {ManuIcon} from '../../../assets/svgs/SocialIconsSvgs';
import {HorizontalFlatList} from '@idiosync/horizontal-flatlist';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import SearchComponent from '../../../components/SearchComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import {updateFCMToken} from '../../../apis/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
const OrderType = ({item, cart, navigation}) => {
  const dispatch = useDispatch();

  const updateOrderType = type => {
    dispatch({
      type: 'UPDATE_ORDER_TYPE',
      payload: type,
    });
    navigation.navigate('Menu');
  };
  return (
    <TouchableOpacity
      onPress={() => updateOrderType(item.value)}
      style={{
        flex: 1,
        height: 75,
        borderRadius: BorderRadius,
        backgroundColor:
          cart.orderType === item.value ? Color.secondary : Color.light,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: item.id === 1 ? 10 : 0,
        marginLeft: item.id === 2 ? 10 : 0,
        paddingHorizontal: 10,
        flexDirection: 'row',
      }}>
      {item.id === 1 ? (
        <PickupSvgs
          color={cart.orderType === item.value ? Color.light : '#2A3B56'}
        />
      ) : item.id === 2 ? (
        <DeliverySvgs
          color={cart.orderType === item.value ? Color.light : '#2A3B56'}
        />
      ) : null}
      <View style={{marginLeft: 10, width: 85}}>
        <Text
          style={{
            color:
              cart.orderType === item.value ? Color.light : Color.headingSm,
            fontSize: 15,
            fontFamily: Font.Urbanist_Bold,
          }}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            paddingTop: 0.5,
            color:
              cart.orderType === item.value ? Color.tertiary : Color.greyscale,
            fontSize: 11,
            fontFamily: Font.Urbanist_Medium,
          }}>
          {item.discount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FeaturedItem = ({item, index, auth, wishlist}) => {
  let navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Custom', {
          edit: false,
          productId: item.id,
          product: item,
          fromMenu: false,
        })
      }
      style={{
        backgroundColor: Color.light,
        borderRadius: BorderRadius,
        width: 160,
        height: 240,
        overflow: 'hidden',
        marginLeft: index === 0 ? 0 : 12,
        padding: 15,
      }}>
      <Image
        style={{
          height: 130,
          width: 130,
          borderRadius: BorderRadius,
        }}
        source={{uri: item.image}}
        // source={require('../../../assets/images/pics/foodBg.png')}
        resizeMode="cover"
      />
      <Text
        style={[styles.Heading, {fontSize: 18, width: '90%', marginTop: 2.5}]}
        numberOfLines={1}>
        {item.name}
      </Text>
      <Text
        style={[
          {
            fontSize: 12,
            fontFamily: Font.Urbanist_Light,
            color: '#616161',
            height: 30,
          },
        ]}
        numberOfLines={2}>
        {item.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 2.5,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{...styles.Heading, color: Color.primary, fontSize: 18}}>
          ${item.price}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            iconFamily={'FontAwesome'}
            color={Color.primary}
            size={12}
            name={parseInt(item.avg_rating) >= 1 ? 'star' : 'star-o'}
          />
          <Icon
            iconFamily={'FontAwesome'}
            color={Color.primary}
            size={12}
            name={parseInt(item.avg_rating) >= 2 ? 'star' : 'star-o'}
          />
          <Icon
            iconFamily={'FontAwesome'}
            color={Color.primary}
            size={12}
            name={parseInt(item.avg_rating) >= 3 ? 'star' : 'star-o'}
          />
          <Icon
            iconFamily={'FontAwesome'}
            color={Color.primary}
            size={12}
            name={parseInt(item.avg_rating) >= 4 ? 'star' : 'star-o'}
          />
          <Icon
            iconFamily={'FontAwesome'}
            color={Color.primary}
            size={12}
            name={parseInt(item.avg_rating) >= 5 ? 'star' : 'star-o'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  const [activeBg, setActiveBg] = useState(1);
  const [catState, setCatState] = useState(false);
  const [bannerImg, setBannerImg] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const {categories, products, banners, auth, wishlist, cart} = useSelector(
    state => ({
      ...state,
    }),
  );
  const renderItemCategories = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.reset({
          routes: [
            {
              name: 'BottomTabScreen',
              state: {
                routes: [
                  {
                    name: 'Menu',
                    params: {
                      activeId: item.id,
                      activeCat: item.name,
                    },
                  },
                ],
              },
            },
          ],
        })
      }
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
          paddingVertical: 5,
          width: catState ? Window.width / 4 : Window.width / 4.5,
          borderRadius: BorderRadius,
          backgroundColor: Color.light,
        },
        catState && {
          flex: 1,
        },
      ]}>
      <Image
        style={{height: 50, width: 50}}
        source={{uri: item.icon}}
        resizeMode="contain"
      />
      <Text
        numberOfLines={1}
        style={{
          ...GlobalStyle.Heading,
          fontSize: 13,
          marginTop: 5,
          width: Window.width / 5,
          textAlign: 'center',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    banners[0].map(x => setBannerImg(prev => [x.image, ...prev]));
  }, []);
  /// Animated
  const progress = useSharedValue(0);
  const progress2 = useSharedValue(1);
  const progress3 = useSharedValue(235);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  const reanimatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: progress2.value,
    };
  }, []);
  const reanimatedStyle3 = useAnimatedStyle(() => {
    return {
      height: progress3.value,
    };
  }, []);

  useEffect(() => {
    if (catState) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0);
    }
    if (catState) {
      progress2.value = withSpring(0);
    } else {
      progress2.value = withSpring(1);
    }
    if (catState) {
      progress3.value = withSpring((categories[0].length / 4) * 110);
    } else {
      progress3.value = withSpring(180);
    }
  }, [catState]);

  useEffect(async () => {
    let fcmtoken = await AsyncStorage.getItem('fcmtoken');
    updateFCMToken(
      {
        cm_firebase_token: fcmtoken,
      },
      auth.token,
    );
  }, []);

  // BackHandler
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 20}}>
        <View
          style={{
            paddingHorizontal: Window.fixPadding * 2,
          }}>
          <Header navigation={navigation} cart={cart} wishlist={wishlist} />
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: Color.light,
                height: 56,
                borderRadius: BorderRadius,
                paddingHorizontal: 10,
                marginVertical: 10,
              }}
              onPress={() => setOpenSearch(true)}>
              <MaterialCommunityIcons
                color={'#BDBDBD'}
                name={'magnify'}
                size={23}
              />
              <Text
                style={{
                  color: '#BDBDBD',
                  fontFamily: Font.Urbanist_SemiBold,
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                What are you craving?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingRow}>
          <Text style={styles.Heading}>Special Offers</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SpecialOffer')}>
            <Text
              style={{
                ...GlobalStyle.Heading,
                color: Color.primary,
                fontSize: 16,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Swiper
          autoplay
          style={{height: 180}}
          activeDot={
            <View
              style={{
                width: 16,
                height: 4,
                borderRadius: 100,
                marginHorizontal: 5,
                backgroundColor: '#FFFFFF',
              }}
            />
          }
          dot={
            <View
              style={{
                width: 16,
                height: 4,
                borderRadius: 100,
                marginHorizontal: 5,
                backgroundColor: '#E0E0E0',
                opacity: 0.7,
              }}
            />
          }>
          {bannerImg.map(x => (
            <Image
              source={{uri: x}}
              style={{
                height: 180,
                borderRadius: BorderRadius,
                width: '90%',
                alignSelf: 'center',
              }}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
          ))}
        </Swiper>

        <View style={[styles.headingRow]}>
          <Text style={styles.Heading}>Order Type</Text>
          <Text
            style={{
              fontSize: 14,
              color: Color.primary,
              fontFamily: Font.Urbanist_Bold,
              lineHeight: 22,
            }}>
            Select any 1 Option
          </Text>
        </View>

        <FlatList
          data={OrderTypeData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          initialNumToRender={5}
          renderItem={({item}) => (
            <OrderType
              setActiveBg={setActiveBg}
              activeBg={activeBg}
              cart={cart}
              item={item}
              navigation={navigation}
            />
          )}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />

        <View style={styles.headingRow}>
          <Text style={styles.Heading}>Discount Guaranteed! 👌</Text>
          <Text
            onPress={() => navigation.navigate('Menu')}
            style={{
              fontSize: 16,
              fontFamily: Font.Urbanist_Bold,
              color: Color.primary,
            }}>
            See All
          </Text>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
          }}>
          {products[0] &&
            products[0].map((item, index) => (
              <FeaturedItem
                item={item}
                key={index}
                index={index}
                auth={auth}
                wishlist={wishlist}
              />
            ))}
        </ScrollView>
        <View style={styles.headingRow}>
          <Text style={styles.Heading}>Food Categories! 👌</Text>
          {catState ? (
            <TouchableOpacity onPress={() => setCatState(false)}>
              <Icon
                iconFamily={'AntDesign'}
                name="close"
                size={20}
                color={Color.secondary}
              />
            </TouchableOpacity>
          ) : (
            <Text
              onPress={() => {
                setCatState(true);
              }}
              style={{
                fontSize: 16,
                fontFamily: Font.Urbanist_Bold,
                color: Color.primary,
              }}>
              See All
            </Text>
          )}
        </View>
        {categories && (
          <Animated.View style={reanimatedStyle3}>
            <Animated.View style={[reanimatedStyle, {paddingHorizontal: 20}]}>
              <FlatList
                data={categories[0]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{}}
                initialNumToRender={4}
                renderItem={renderItemCategories}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                scrollEnabled={false}
              />
            </Animated.View>

            <Animated.View
              style={[reanimatedStyle2, {position: 'absolute', top: 0}]}>
              <HorizontalFlatList
                initialNumToRender={2}
                data={categories[0]}
                contentContainerStyle={{paddingHorizontal: 10}}
                numRows={2}
                keyExtractor={(item, row, col) => item.id}
                renderItem={renderItemCategories}
              />
            </Animated.View>
          </Animated.View>
        )}
        <ReferCard navigation={navigation} />
        <LoyaltyCard navigation={navigation} />
      </ScrollView>

      <SearchComponent open={openSearch} setOpen={setOpenSearch} />
    </SafeAreaView>
  );
};

const LoyaltyCard = ({navigation}) => {
  return (
    <TouchableOpacity
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
        imageStyle={{
          resizeMode: 'contain',
          borderRadius: BorderRadius,
        }}
        style={{
          shadowColor: 'rgba(0,0,0,0.4)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 22,
          marginHorizontal: 20,
          height: 113,
          paddingLeft: 25,
          justifyContent: 'center',
          flex: 1,
          marginBottom: 30,
        }}
        source={require('../../../assets/images/pics/loyaltyBg.jpg')}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Font.Urbanist_Black,
            color: Color.light,
            width: Window.width / 2.2,
          }}>
          Collect Points For Every Order
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Font.Urbanist_Regular,
            color: Color.light,
          }}>
          earn points & get discounts
        </Text>
        <View
          style={{
            width: Window.width / 2.2,
            height: Window.width / 2.2,
            position: 'absolute',
            right: -40,
            top: -40,
          }}>
          <LoyaltySvg width={Window.width / 3} height={Window.width / 2} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const ReferCard = ({navigation}) => {
  return (
    <TouchableOpacity
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
                          name: 'Referral',
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
        imageStyle={{
          resizeMode: 'contain',
          borderRadius: BorderRadius,
        }}
        style={{
          shadowColor: 'rgba(0,0,0,0.4)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 22,
          marginHorizontal: 20,
          height: 113,
          paddingLeft: 25,
          justifyContent: 'center',
          flex: 1,
          marginBottom: 30,
          marginTop: 30,
        }}
        source={require('../../../assets/images/pics/referBg.jpg')}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Font.Urbanist_Black,
            color: Color.light,
          }}>
          Refer a Friend
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Font.Urbanist_Regular,
            color: Color.light,
          }}>
          and both get a discount!
        </Text>
        <View
          style={{
            width: Window.width / 2.2,
            height: Window.width / 2.2,
            position: 'absolute',
            right: -20,
            top: -40,
          }}>
          <ReferSvg width={Window.width / 2.35} height={Window.width / 2.2} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Header = ({navigation, cart, wishlist}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <ManuIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View>
          <TouchableOpacity
            style={[styles.TopIconStyle, {marginRight: 10}]}
            onPress={() => navigation.navigate('Wishlist')}>
            <Icon
              iconFamily={'Ionicons'}
              name={'heart-outline'}
              size={20}
              color={Color.tertiary}
            />
          </TouchableOpacity>
          {wishlist.addedItems.length > 0 && (
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                backgroundColor: '#F75555',
                position: 'absolute',
                right: 22,
                top: 12,
              }}
            />
          )}
        </View>
        <TouchableOpacity
          style={[styles.TopIconStyle, {marginRight: 10}]}
          onPress={() => navigation.navigate('QRCode')}>
          <Icon
            iconFamily={'Ionicons'}
            name={'scan'}
            size={20}
            color={Color.tertiary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.TopIconStyle, {marginRight: 10}]}
          onPress={() => navigation.navigate('Notification')}>
          <Icon
            iconFamily={'Ionicons'}
            name={'notifications-outline'}
            size={20}
            color={Color.tertiary}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.TopIconStyle}
            onPress={() =>
              navigation.navigate('CheckOut', {
                reorder: false,
              })
            }>
            <Icon
              iconFamily={'Feather'}
              name={'shopping-bag'}
              size={20}
              color={Color.tertiary}
            />
          </TouchableOpacity>
          {cart.addedItems.length > 0 && (
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                backgroundColor: '#F75555',
                position: 'absolute',
                right: 12,
                top: 12,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};
export default Home;
