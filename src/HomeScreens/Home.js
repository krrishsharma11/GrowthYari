import { StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SwiperCard from '../components/SwiperCard'
import UserDetail from '../components/UserDetail'
import EventCarousel from '../components/EventCarousel'
import ProfileList from '../components/ProfileList'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Header logo={true} />
            <UserDetail />
            <ScrollView style={styles.content} >

                <SwiperCard />
                <EventCarousel />
                <ProfileList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    }
})