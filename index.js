"use strict";
// Фабричний метод
//
// Розробіть систему для роботи з віддаленим API, яке може надавати різні послуги (наприклад, отримання інформації про погоду, конвертація валют). 
// Створіть інтерфейс RemoteService та його конкретні реалізації, такі як WeatherService та CurrencyConversionService.
//
// Створіть абстрактний клас ServiceFactory, який включатиме фабричні методи для кожного типу послуги. 
// Реалізуйте конкретні фабрики, такі як WeatherServiceFactory та CurrencyServiceFactory, які спадають від ServiceFactory 
// та надають реалізації фабричних методів для створення відповідних об'єктів.
//
// Напишіть клієнтський код, який використовує фабрики для створення та використання різних видів віддалених послуг.
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
