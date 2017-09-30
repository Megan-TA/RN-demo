/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-29 18:12:07 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-29 18:15:59
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

export default class personal extends Component {
    static navigationOptions = {
        title: '个人中心'
    }
    render () {
        return (
            <View>
                <Text>个人中心</Text>
            </View>
        )
    }
}