import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./src/IndexScreen";

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "Blogs",
		},
	}
);

export default createAppContainer(navigator);
