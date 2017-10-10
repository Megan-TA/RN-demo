/*
 * 电影详情页
 * @Author: chen_huang 
 * @Date: 2017-09-29 16:38:27 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-10 11:04:00
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    AsyncStorage,
    ActivityIndicator
} from 'react-native'

export default class list extends Component {
    static navigationOptions = {
        title: '详情页'
    }
    state = {
        data: {},
        ready: false
    }
    async componentDidMount() {
        const { state: { params: { id} } } = this.props.navigation
        const url = 'https://api.douban.com/v2/movie/subject'
        let jsonData = await AsyncStorage.getItem(id)
        if (jsonData != null) {
            jsonData = JSON.parse(jsonData)
            alert('数据来自缓存')
        } else {
            await fetch(`${url}/${id}`)
                .then((response) => response.text())
                .then((textData) => {
                    // 反序列化
                    jsonData = JSON.parse(textData)
                    jsonData.images = jsonData.images.large.replace('webp', 'jpg')
                    alert('数据来自服务器')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        this.setState({
            ready: true,
            data: jsonData
        })
        AsyncStorage.setItem(id, JSON.stringify(jsonData))   
    }
    render() {
        const { state, goBack } = this.props.navigation
        const { data: { images, summary, title }, ready } = this.state
        return (
            <View>
                {
                    ready ? 
                        <View>
                            <Text>{title}</Text>
                            <Image 
                                source = {{ uri: images }}
                                style = { styles.image }></Image>
                            <Text>id:  {state.params.id}</Text>
                            <Text>{summary}</Text>
                            <Text onPress = {() => {
                                state.params.callback('测试子传父数据')
                                goBack()
                            } }>点我返回</Text>
                        </View>
                        :
                        <ActivityIndicator size = "large"/>
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150
    }
})