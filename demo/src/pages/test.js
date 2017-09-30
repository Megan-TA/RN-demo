/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-29 18:06:33 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-29 18:13:50
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

import {
  TabNavigator
} from 'react-navigation';

import list from './list'
import personal from './personal'

const tab = TabNavigator({
    list: { screen: list },
    personal: { screen: personal },    
})

export default tab