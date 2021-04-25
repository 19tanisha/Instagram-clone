import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chats = () => {
    return (
        <View style={styles.container}>
            <Text>
                Chat Page
            </Text>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffefa1'
    }
})
