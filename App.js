import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreens';
import ResultsShowScreen from './src/screens/ResultsShowScreens';

const navigator = createStackNavigator({
      Search: SearchScreen,
      ResultsShow: ResultsShowScreen
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
      title: "BusinessSearch",
  }
});

export default createAppContainer(navigator);
