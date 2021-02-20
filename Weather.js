import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#304352', '#d7d2cc'],
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#BBD2C5', '#536976', '#292E49'],
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#5da1ec', '#6bdeb9'],
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#3265a2', '#4a617e'],
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#a3a3a3', '#f5f5f5'],
  },
  Atmosphere: {
    iconName: 'weather-sunset',
    gradient: ['#ffca4a', '#c8b588'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ffcb17', '#ffee61'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#a3a3a3', '#f5f5f5'],
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#b9ccdb', '#88878c'],
  },
  Dust: {
    iconName: 'weather-hazy',
    gradient: ['#b9ccdb', '#88878c'],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color={'#ffffff'} />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Haze', 'Mist', 'Dust']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 28,
    color: '#ffffff',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
