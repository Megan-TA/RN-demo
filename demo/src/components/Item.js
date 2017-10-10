/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-27 23:49:24 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-09 17:12:54
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('window')

const thirdWidth = width / 3

const imageWidth = thirdWidth - 10 * 2

const imageHeight = thirdWidth / 0.697

const styles = StyleSheet.create({
    root: {
        width: imageWidth,
        marginRight: 15
    },
    image: {
        width: imageWidth,
        height: imageHeight
    },
    title: {
        textAlign: 'center',
        marginBottom: 10
    }
})

// 无状态组件
const Item = (props) => {
    const { title, image, onPress } = props
    return (
        // view组件中不能直接执行onpress这类的点击事件
        // TouchableOpacity组件可以执行点击事件
        <TouchableOpacity 
            style = { styles.root }
            onPress = { onPress }>
            <Image 
                source = {{ uri: image }}
                style = { styles.image }
            ></Image>
            <Text 
                numberOfLines = { 1 }
                style = { styles.title }
            >{ title }</Text>
        </TouchableOpacity>
    )
}
export default Item