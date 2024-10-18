import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    useColorScheme
} from 'react-native'

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>Hello, World!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
    },
    lightText: {
        color: 'white',
    },
    darkText: {
        color: 'black',
    },
});

export default AppPro;