import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePost = () => {
    return (
        <View>
            <Image source={require("../../assets/createPost.png")}
                style={{ height: "97%", width: "100%", marginTop: 20 }} />
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({})