import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import {colors} from './../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WeatherInfo({currentWeather}) {
    const {
        main : {temp},
        weather: [details],
        name,
      } = currentWeather
      const { icon, main, description } = details
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={Styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={Styles.weatherIcon} source={{uri: iconUrl}} />
            <Text style={Styles.textPrimary}>{temp}°</Text>
            <Text style={Styles.weatherDescription}>{description}</Text>
            <Text style={Styles.textSecondary}>{main}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },
    weatherDescription:{
        textTransform: 'capitalize',
    },
    weatherIcon:{
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR
    },
    textSecondary:{
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10
    }
})