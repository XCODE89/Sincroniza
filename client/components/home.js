import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Actividades from "./screens/actividades/actividades";
import Gastos from "./screens/gastos/gastos";
import Indicadores from "./screens/indicadores/indicadores"

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Actividades" component={Actividades} options={{headerShown:false}}/>
                <Tab.Screen name="Gastos" component={Gastos} options={{headerShown:false}}/>
                <Tab.Screen name="Indicadores" component={Indicadores} options={{headerShown:false}}/>
            </Tab.Navigator>
    )
}
export default Home 