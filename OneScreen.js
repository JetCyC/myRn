/**
 * description：
 * anthor： caoyanchang
 * time： 2018/6/3 上午10:22
 */
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import pxToDp from "./utils/px";

class OneScreen extends Component {


    static navigationOptions = {
        title: 'One',
    }

    render() {
        const {navigate} = this.props.navigation;
        return <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Two')
            }}>
                <Text style={styles.textStyle}>
                    跳转
                </Text>
            </TouchableOpacity>
        </View>
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },

    textStyle: {
        fontSize: pxToDp(100),
        color: 'black'
    }
});
export default OneScreen;
