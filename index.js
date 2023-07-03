/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Tabs from './Navigator/Tabs';
import StackNav from './Navigator/StackNav';
import Drawer from './Navigator/Drawer';

AppRegistry.registerComponent(appName, () => Drawer);
