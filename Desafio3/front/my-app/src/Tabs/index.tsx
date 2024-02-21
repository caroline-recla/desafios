import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Home';
import Appointment from './Appointment';

const Tab = createBottomTabNavigator();

export default function index(){
    return(
<Tab.Navigator>
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Appointment' component={Appointment}/>
</Tab.Navigator>
    )
}