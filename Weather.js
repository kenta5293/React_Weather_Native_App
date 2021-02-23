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
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstorm',
    subTitle: 'Now it is a Thunderstorm',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subTitle: 'Now it is a Drizzle',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subTitle: 'Now it is a Rain',
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#7DE2FC', '#B9B6E5'],
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
    gradient: ['#FF7300', '#FEF253'],
    title: 'Clear',
    subTitle: 'Now it is a Clear',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subTitle: 'Now it is a Clouds',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Mist',
    subTitle: 'Now it is a Mist',
  },
  Dust: {
    iconName: 'weather-hazy',
    gradient: ['#4DA0B0', '#D39D38'],
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
    textAlign: 'left',
  },
  subTitle: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'left',
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
});
