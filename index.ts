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


interface IWeatherService {
    readonly weatherForecast : () => void
    readonly weeklyWeatherForecast : () => void
}
class WeatherService implements IWeatherService {
    weatherForecast () {
        console.log ('weather forecast')
    }
    weeklyWeatherForecast () {
        console.log ('weekly weather forecast')
    }
}

interface ICurrencyConversionService {
    readonly viewExchangeRates : () => void
    readonly currencyExchange : () => void
}
class CurrencyConversionService implements ICurrencyConversionService {
    viewExchangeRates () {
        console.log ('view exchange rates')
    }
    currencyExchange () {
        console.log ('currency exchange')
    }
}

type RemoteServiceType =  IWeatherService | ICurrencyConversionService

interface IServiceFactory {
    readonly createRemoteService : () => RemoteServiceType
}
abstract class ServiceFactory {
    abstract createRemoteService () : RemoteServiceType
}

class WeatherServiceFactory extends ServiceFactory {
     createRemoteService () {
        return new WeatherService ()
     }
}
class CurrencyServiceFactory extends ServiceFactory {
    createRemoteService () {
        return new CurrencyConversionService ()
     }
}

const weather = new WeatherServiceFactory ().createRemoteService ()
const currencyConversion = new CurrencyServiceFactory ().createRemoteService ()
weather.weatherForecast ()