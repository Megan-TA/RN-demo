/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-29 16:38:32 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-30 18:25:06
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native'

import {
  StackNavigator
} from 'react-navigation'

import list from './pages/list'
import detail from './pages/detail'
import tab from './pages/test'

const router = StackNavigator({
  list: { screen: tab },
  detail: { screen: detail },
})

// const router = TabNavigator({
//   list: { screen: list },
//   detail: { screen: detail },
// })

export default router