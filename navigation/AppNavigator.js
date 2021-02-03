import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import EventsScreen from '../screens/Events'
import EventScreen from '../screens/Event'
import MapScreen from '../screens/Map'

const Events = createStackNavigator({
    EventsScreen,
    EventScreen
  })


const Map = createStackNavigator({
    MapScreen
})

const TabNavigator = createBottomTabNavigator({
    Events,
    Map

})

export default createAppContainer(TabNavigator)
