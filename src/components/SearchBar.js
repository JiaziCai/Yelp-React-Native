import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons'

export default function SearchBar({term, onTermChange, onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle} />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle} 
                value={term}
                onChangeText={onTermChange}    
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
