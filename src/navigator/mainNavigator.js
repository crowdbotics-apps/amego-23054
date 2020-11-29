import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList179682Navigator from '../features/ArticleList179682/navigator';
import ArticleList179665Navigator from '../features/ArticleList179665/navigator';
import ArticleList179664Navigator from '../features/ArticleList179664/navigator';
import ArticleList179663Navigator from '../features/ArticleList179663/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList179682: { screen: ArticleList179682Navigator },
ArticleList179665: { screen: ArticleList179665Navigator },
ArticleList179664: { screen: ArticleList179664Navigator },
ArticleList179663: { screen: ArticleList179663Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
