import React, { useEffect } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Onboarding from '@/pages/Onboarding';
import SplashScreen from '@/pages/SplashScreen';
import Signin from '@/pages/auth/Signin';
import Signup from '@/pages/auth/Signup';
import { useNavigation } from '@react-navigation/native';
import VerifyAccount from '@/pages/auth/VerifyAccount';
import PhoneNumber from '@/pages/auth/PhoneNumber';
import EmailAdressScreen from '@/pages/auth/EmailScreen';
import CodeVerification from '@/pages/auth/CodeVerification';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import CreatePassword from '@/pages/auth/CreatePassword';
import HomeScreen from '@/pages/HomeScreen';
import ProfileDetails from '@/pages/home/ProfileDetails';
import ProductDetails from '@/pages/product/ProductDetails';
import ProductReviews from '@/pages/product/ProductReviews';
import Cart from '@/pages/cart/CartScreen';
import ActivePage from '@/pages/cart/ActivePage';
import CompletePage from '@/pages/cart/CompletePage';
import CheckoutScreen from '@/pages/cart/CheckoutScreen';
import PaymentMethods from '@/pages/payment/PaymentMethods';
import PinEntry from '@/pages/payment/PaymentConfirmation';

type AppStackParamList = {
  Splash: undefined;
  OnBoarding: undefined;
  Signin: undefined;
  Signup: undefined;
  Verify: undefined;
  PhoneNumber: undefined;
  Email: undefined;
  Verification: undefined;
  ForgotPassword: undefined;
  CreatePassword: undefined;
  Home: undefined;
   ProfileDetails: { story: { username: string; time: string; image: any } };
  ProductDetails: undefined;
  ProductReviews: undefined;
  CartScreen: undefined;
  ActivePage: undefined;
  CompletePage: undefined;
  CheckoutScreen: undefined;
  PaymentMethods: undefined;
  PinEntry: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();


const SplashScreenWrapper = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
};

export default function App() {
  return (
   <Stack.Navigator
  initialRouteName="Splash"
  screenOptions={{ headerShown: false } }
>
  <Stack.Screen name="Splash" component={SplashScreenWrapper} />
  <Stack.Screen name="OnBoarding" component={Onboarding} />
  <Stack.Screen name="Signin" component={Signin} />
  <Stack.Screen name="Signup" component={Signup} />
   <Stack.Screen name="Verify" component={VerifyAccount} />
   <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
   <Stack.Screen name="Email" component={EmailAdressScreen} />
   <Stack.Screen name="Verification" component={CodeVerification} />
   <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
     <Stack.Screen name="CreatePassword" component={CreatePassword} />
     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
     <Stack.Screen name="ProductDetails" component={ProductDetails} />
     <Stack.Screen name="ProductReviews" component={ProductReviews} />
     <Stack.Screen name="CartScreen" component={Cart} />
     <Stack.Screen name="ActivePage" component={ActivePage} />
     <Stack.Screen name="CompletePage" component={CompletePage} />
     <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
     <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="PinEntry" component={PinEntry} />
</Stack.Navigator>


  );
}
