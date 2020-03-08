import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Dashboard from './pages/Dashboard';
import {LoadingPage} from 'react-native-cotter';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackRouter() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

function Router() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackRouter}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="CotterLoadingLogin"
        component={LoadingPage}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default Router;
