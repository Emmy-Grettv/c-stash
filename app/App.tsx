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
</Stack.Navigator>


  );
}
