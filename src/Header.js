import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = (props) => {
    return (
        <View
            style={styles.view}
        >
            <Text
                style={styles.text}
            >
                Üyelik Girişi
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width:'100%',
        height: 50,
        backgroundColor: '#df7777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight:'bold',
        color:'#ffffff'
    }
})

export default Header;