/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-27 23:49:24 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-29 01:14:07
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
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
    const { title, image } = props
    return (
        <View style = { styles.root }>
            <Image 
                source = {{ uri: image }}
                style = { styles.image }
            ></Image>
            <Text 
                numberOfLines = { 1 }
                style = { styles.title }
            >{ title }</Text>
        </View>
    )
}
export default Item