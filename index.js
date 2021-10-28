/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Car from './src/pages/Steps/car'
import Login from './src/pages/Login'
import Type from './src/pages/Steps/type'
import Payment from './src/pages/Steps/payment'
import Ride from './src/pages/RIde'
import Home from './src/pages/Home'
AppRegistry.registerComponent(appName, () => Home);
