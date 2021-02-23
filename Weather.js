import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#304352', '#d7d2cc'],
    title: 'Haze',
    subTitle: 'Now it is a Haze',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#BBD2C5', '#536976', '#292E49'],
    title: 'Thunderstorm',
    subTitle: 'Now it is a Thunderstorm',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#5da1ec', '#6bdeb9'],
    title: 'Drizzle',
    subTitle: 'Now it is a Drizzle',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#3265a2', '#4a617e'],
    title: 'Rain',
    subTitle: 'Now it is a Rain',
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#a3a3a3', '#f5f5f5'],
    title: 'Snow',
    subTitle: 'Now it is a Snow',
  },
  Atmosphere: {
    iconName: 'weather-sunset',
    gradient: ['#ffca4a', '#c8b588'],
    title: 'Atmosphere',
    subTitle: 'Now it is a Atmosphere',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ffcb17', '#1f88ff'],
    title: 'Clear',
    subTitle: 'Now it is a Clear',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#a3a3a3', '#6DD5FA'],
    title: 'Clouds',
    subTitle: 'Now it is a Clouds',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#b9ccdb', '#88878c'],
    title: 'Mist',
    subTitle: 'Now it is a Mist',
  },
  Dust: {
    iconName: 'weather-hazy',
    gradient: ['#b9ccdb', '#88878c'],
    title: 'Dust',
    subTitle: 'Now it is a Dust',
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
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
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
  title: {
    color: '#ffffff',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 16,
  },
  subTitle: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
