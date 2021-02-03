import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Touchable} from 'react-native';

import Color from '../../constants/Color'

class Tab extends React.Component{
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} style={styles.touchable}>
                <View style={[styles.tab, this.props.selected && styles.selected ]}>
                    <Text style = {[this.props.selected && styles.selected]}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable:{
        flex: 1
    },
    tab:{
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.accent,
        borderLeftColor: Color.accent,
        borderRightColor: Color.accent,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flex: 1
    },
    selected:{
        backgroundColor: Color.accent,
        color: 'white'
    }
})

export default Tab