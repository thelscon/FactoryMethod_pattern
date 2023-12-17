"use strict";
class WeatherService {
    weatherForecast() {
        console.log('weather forecast');
    }
    weeklyWeatherForecast() {
        console.log('weekly weather forecast');
    }
}
class CurrencyConversionService {
    viewExchangeRates() {
        console.log('view exchange rates');
    }
    currencyExchange() {
        console.log('currency exchange');
    }
}
class ServiceFactory {
}
class WeatherServiceFactory extends ServiceFactory {
    createRemoteService() {
        return new WeatherService();
    }
}
class CurrencyServiceFactory extends ServiceFactory {
    createRemoteService() {
        return new CurrencyConversionService();
    }
}
const weather = new WeatherServiceFactory().createRemoteService();
const currencyConversion = new CurrencyServiceFactory().createRemoteService();
weather.weatherForecast();
