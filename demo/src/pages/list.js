/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-29 16:40:19 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-10 11:32:09
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Button,
    Dimensions
} from 'react-native'

import Item from '../components/Item'

import { createStore } from 'redux'

const { width, height } = Dimensions.get('window')

const thirdWidth = width / 3

const imageWidth = thirdWidth - 10 * 2

const imageHeight = thirdWidth / 0.697

const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD':
            return { counter: state.counter + 1  }
        default: 
            return state
    }
}

// const add = () => { { type: 'ADD'} }

const store = createStore(reducer)

// alert(store.getState().counter)
store.dispatch({ type: 'ADD'})
// alert(store.getState().counter)

const movies = [
    {
        id: '0',
        title: '张三',
        images: {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    },
    {
        id: '1',
        title: '李四',
        images: {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    },
    {
        id: '2',
        title: '王五',
        images: {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    },
    {
        id: '3',
        title: '老刘',
        images: {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    }
]

export default class list extends Component {
    static navigationOptions = {
        title: '列表页'
    }
    state = {
        movies: movies,
        // 下拉刷新开关
        refreshing: false,
        // 测试子组件传递参数给父组件
        childState: '',
        ready: false
    }
    refreshing  = false
    fetchDate = () => {
        // 为了防止多次连续下拉
        if (this.refreshing) return
        this.setState({
            refreshing: true,
            ready: true
        })
        this.refreshing = true
        fetch('http://api.douban.com/v2/movie/in_theaters')
            .then((response) => response.text())
            .then((res) => {
                const dataJson = JSON.parse(res)
                console.log(dataJson)
                this.setState({
                    movies: dataJson.subjects,
                    refreshing: false
                })
                this.refreshing = false
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        let that = this
        setTimeout(function () {
            that.fetchDate()
        }, 1000)
    }
    render () {
        const { movies, refreshing, childState, ready } = this.state
        const { navigate } = this.props.navigation
        return (
            <View>
                {
                    ready ? 
                        <View>
                            <Text>{ childState }</Text>
                            <FlatList 
                                keyExtractor = {item => item.id}
                                numColumns = { 3 }
                                columnWrapperStyle = {styles.row}
                                data = { movies }
                                onRefresh = { this.fetchDate }
                                refreshing = { refreshing }
                                renderItem = {({ item }) => 
                                    <Item 
                                        title = { item.title }
                                        image = { item.images.medium }
                                        onPress = { () => navigate('detail', {
                                            id: item.id,
                                            callback: (data) => {
                                                this.setState({
                                                    childState: data
                                                })
                                            }
                                        }) }
                                    />
                                }
                            />
                        </View>
                        :
                        <View>
                            <FlatList 
                                keyExtractor = {item => item.id}
                                numColumns = { 3 }
                                columnWrapperStyle = {styles.row}
                                data = { movies }
                                onRefresh = { this.fetchDate }
                                refreshing = { refreshing }
                                renderItem = {({ item }) => 
                                    <View style = { styles.root }>
                                        <Image
                                            source = { require('../assets/images/react-logo.jpg')}
                                            style = { styles.image }
                                        ></Image>
                                        <Text style = { styles.title }>{ item.title }</Text>
                                    </View>
                                }
                            />
                        </View>
                }
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        width: imageWidth,
        marginRight: 15
    },
    row: {
        paddingHorizontal: 15,
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