import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Actividades from "./screens/actividades/actividades";
import Gastos from "./screens/gastos/gastos";
import Indicadores from "./screens/indicadores/indicadores"

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Actividades" component={Actividades} />
                <Tab.Screen name="Gastos" component={Gastos} />
                <Tab.Screen name="Indicadores" component={Indicadores} />
            </Tab.Navigator>
    )
}
export default Home 