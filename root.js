/**
 * 首页
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    StackNavigator
} from 'react-navigation';
import OneScreen from "./OneScreen";
import TwoScreen from "./TwoScreen";

class Root extends Component {

    //标题
    static navigationOptions = {
        title: "Root"
    };

    render() {
        return (
            <MyNavigation/>
        )
    }
}



const MyNavigation = StackNavigator(
    {
        One: {
            screen: OneScreen,
        },
        Two: {
            screen: TwoScreen
        }

    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
        },
    });
export default Root;
